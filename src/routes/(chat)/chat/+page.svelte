<script lang="ts">
	import { useConvexClient } from 'convex-svelte';
	import { api } from '$convex/_generated/api';
	import { tick } from 'svelte';
	import { browser } from '$app/environment';
	import { renderMd, setMarkdown, setHtml, getLS, setLS, removeLS } from '$lib/components/chat/chat';
	import ChatHeader from '$lib/components/chat/ChatHeader.svelte';
	import ChatInput from '$lib/components/chat/ChatInput.svelte';
	import ChatSuggestions from '$lib/components/chat/ChatSuggestions.svelte';

	const LS_KEY = 'vanchi-thread-v2-id';
	const convex = useConvexClient();

	let threadId = $state<string | null>(null);
	let input = $state('');
	let isLoading = $state(false);
	let isTyping = $state(false);
	let messages: { role: string; text: string }[] = $state([]);
	let typingHtml = $state('');
	let cursorPhase = $state<'blink' | 'fadeout' | 'hidden'>('hidden');
	let rafId: number | null = $state(null);
	let messagesContainer: HTMLDivElement | undefined = $state();
	let isMobile = $state(false);

	$effect(() => {
		if (!browser) return;
		const mediaQuery = window.matchMedia('(pointer: coarse)');
		isMobile = mediaQuery.matches || 'ontouchstart' in window;
		const handleChange = (e: MediaQueryListEvent) => {
			isMobile = e.matches || 'ontouchstart' in window;
		};
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	});

	$effect(() => {
		const saved = getLS(LS_KEY);
		if (saved) threadId = saved;
	});

	function scrollToBottom() {
		if (!messagesContainer) return;
		messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
	}

	$effect(() => {
		if (isTyping && typingHtml && messagesContainer) {
			scrollToBottom();
		}
	});

	function startTyping(text: string) {
		typingHtml = '';
		isTyping = true;
		cursorPhase = 'blink';
		isLoading = false;

		if (rafId !== null) cancelAnimationFrame(rafId);

		const totalFrames = Math.min(30, Math.max(10, Math.floor(1800 / text.length)));
		let frame = 0;

		function step() {
			frame++;
			const pct = frame / totalFrames;
			const reveal = Math.floor(text.length * Math.min(pct, 1));
			typingHtml = renderMd(text.slice(0, reveal));

			if (reveal < text.length) {
				rafId = requestAnimationFrame(step);
			} else {
				typingHtml = renderMd(text);
				cursorPhase = 'fadeout';
				setTimeout(() => {
					cursorPhase = 'hidden';
					isTyping = false;
					messages = [...messages, { role: 'assistant', text }];
					typingHtml = '';
				}, 300);
			}
		}

		rafId = requestAnimationFrame(step);
	}

	async function send() {
		const msg = input.trim();
		if (!msg || isLoading || isTyping) return;
		input = '';
		messages = [...messages, { role: 'user', text: msg }];
		isLoading = true;
		await tick();

		scrollToBottom();

		try {
			let text: string;
			if (!threadId) {
				const result = await convex.action(api.agentV2.conversations.createThread, { prompt: msg });
				threadId = result.threadId!;
				setLS(LS_KEY, result.threadId!);
				text = result.text;
			} else {
				const result = await convex.action(api.agentV2.conversations.continueThread, {
					prompt: msg,
					threadId
				});
				text = result.text;
			}
			startTyping(text);
		} catch (err) {
			console.error('Error:', err);
			messages = [...messages, { role: 'assistant', text: 'Ocurrió un error. Intenta de nuevo.' }];
			isLoading = false;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey && !isMobile) {
			e.preventDefault();
			send();
		}
	}

	function newConversation() {
		removeLS(LS_KEY);
		threadId = null;
		messages = [];
		input = '';
		isLoading = false;
		isTyping = false;
		typingHtml = '';
		cursorPhase = 'hidden';
	}

	function selectSuggestion(text: string) {
		input = text;
		send();
	}
</script>

<svelte:head>
	<title>Chat con el agente IA — Vanchi</title>
	<meta name="description" content="Hablá con el agente de IA. Sin demo armada, sin truco. Preguntale sobre proyectos reales, metodologia GaaS, precios o cualquier cosa. Probalo gratis." />
	<svelte:element this={'script'} type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			name: 'Chat con el agente IA de Vanchi',
			description: 'Agente conversacional de IA que responde preguntas sobre proyectos reales, metodología GaaS, precios y automatización de procesos. Sin demo armada, sin respuestas prefabricadas.',
			url: 'https://www.vanchi.pro/chat',
			applicationCategory: 'AIApplication',
			operatingSystem: 'Web',
			author: {
				'@type': 'Person',
				'@id': 'https://www.vanchi.pro/#person',
				name: 'Ivan Yarupaitan Rivera'
			},
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'PEN'
			}
		}).replace(/</g, '\\u003c')}
	</svelte:element>
	<svelte:element this={'script'} type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: [
				{
					'@type': 'Question',
					name: '¿Qué proyectos reales ha hecho Vanchi?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Vanchi ha implementado 9 proyectos de IA y automatización. El más destacado es ENCAP, un tutor AI 24/7 que resuelve dudas académicas sin un docente conectado, con 95% de satisfacción y en uso activo por un cliente real. También están Molaric (agente IA para clínicas dentales vía WhatsApp), Junín360 (gestión de informes para el Gobierno Regional de Junín), y más.'
					}
				},
				{
					'@type': 'Question',
					name: '¿Cómo funciona la metodología GaaS?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'GaaS (Generative Agent as a Service) es una metodología donde agentes de IA ejecutan procesos completos sin intervención humana. A diferencia del SaaS tradicional, no entregás una herramienta que alguien debe operar: definís un objetivo y el agente lo completa solo. Tiene 10 características no negociables: Outcome-Based, Goal-Driven, Reasoning Loop, Tool Use, Persistent Memory, Self-Improvement, Multi-Agent, Proactive, Guardrails y Human-in-the-Loop.'
					}
				},
				{
					'@type': 'Question',
					name: '¿Cuánto cuesta implementar un agente de IA?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Los agentes de IA de Vanchi tienen precios transparentes con pago por hitos de resultado, no por horas. El rango va desde S/ 2,000 para un agente simple hasta S/ 15,000+ para orquestaciones multi-agente enterprise. Cada proyecto se divide en fases con resultados medibles. Solo pagás cuando cada fase está funcionando.'
					}
				}
			]
		}).replace(/</g, '\\u003c')}
	</svelte:element>
</svelte:head>

<div class="mx-auto flex h-full w-full max-w-5xl flex-col">
	<ChatHeader onNewConversation={newConversation} />

	{#if messages.length === 0 && !isTyping}
		<!-- Zero state: contenido + input centrados verticalmente -->
		<div class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6">
			<div class="flex w-full max-w-lg flex-col items-center justify-center gap-6 py-8">
				<ChatSuggestions onSelect={selectSuggestion} />
				<ChatInput bind:input={input} disabled={isLoading || isTyping} onSend={send} onKeydown={handleKeydown} zeroState={true} />
			</div>
		</div>
		<div class="px-4 pb-3 sm:px-6 sm:pb-4">
			<p class="text-center text-xs text-base-content/20">
			Este agente puede cometer errores. Si necesitas informacion critica, verifica con Ivan directamente.
		</p>
		</div>
	{:else}
		<div bind:this={messagesContainer} class="min-h-0 flex-1 overflow-y-auto scroll-smooth px-6 py-4">
			<div class="flex flex-col gap-5">
				{#each messages as msg, i (i)}
					{#if msg.role === 'user'}
						<div class="flex flex-col items-end">
							<div class="border border-base-300 bg-base-200 px-4 py-2.5 max-w-[75%] sm:max-w-[65%]">
								<p class="font-mono text-sm text-base-content">{msg.text}</p>
							</div>
						</div>
					{:else}
						<div class="flex flex-col items-start">
							<div class="max-w-[90%] sm:max-w-[80%]">
								<div class="prose prose-sm max-w-none border-l-2 border-base-300 pl-4 prose-invert">
									<div use:setMarkdown={msg.text}></div>
								</div>
							</div>
						</div>
					{/if}
				{/each}

				{#if isTyping}
					<div class="flex flex-col items-start">
						<div class="max-w-[90%] sm:max-w-[80%]">
							<div class="prose prose-sm max-w-none border-l-2 border-base-300 pl-4 prose-invert">
								<div use:setHtml={typingHtml}></div>
								{#if cursorPhase === 'blink'}
									<span class="inline-block h-[1.1em] w-0.5 animate-pulse bg-base-content align-text-bottom"></span>
								{:else if cursorPhase === 'fadeout'}
									<span class="inline-block h-[1.1em] w-0.5 bg-base-content align-text-bottom"></span>
								{/if}
							</div>
						</div>
					</div>
				{/if}

				{#if isLoading}
					<div class="flex items-center justify-center gap-1.5 py-5">
						<span class="loading-dot"></span>
					</div>
				{/if}
			</div>
		</div>

		<ChatInput bind:input={input} disabled={isLoading || isTyping} onSend={send} onKeydown={handleKeydown} />
	{/if}
</div>

<style>
	.loading-dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: oklch(70% 0 0);
		animation: dot-pulse 1.4s ease-in-out infinite;
	}

	@keyframes dot-pulse {
		0%, 80%, 100% { opacity: 0.2; transform: scale(0.6); }
		40% { opacity: 1; transform: scale(1); }
	}
</style>
