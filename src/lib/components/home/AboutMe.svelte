<script>
	import { fly } from 'svelte/transition';
	import Me from './Me.svelte';

	const birthday = new Date(2002, 1, 10);
	const edad = Math.floor((new Date().getTime() - birthday.getTime()) / 3.15576e10);
</script>

<section class="w-full py-20 lg:py-32" id="about-me">
	<div class="container mx-auto px-4">
		<!-- Header de Sección -->
		<div class="mb-8 text-center">
			<h2 in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-4 text-3xl font-bold lg:text-5xl">
				La Ingeniería detrás de la
				<span
					class="bg-linear-to-r from-primary via-primary to-primary bg-clip-text font-serif text-transparent italic"
				>
					Inteligencia.
				</span>
			</h2>
			<p
				in:fly={{ y: 30, duration: 800, delay: 400 }}
				class="mx-auto max-w-2xl text-base text-base-content/60 lg:text-lg"
			>
				Iván, Ingeniero de Sistemas y Computación ({edad}). Apasionado por la IA y el desarrollo
				web.
			</p>
		</div>
	</div>

	<Me />
</section>
