/**
 * 🌐 Asistente Vanchi — Base de Conocimiento
 *
 * Este archivo contiene TODO el texto del portafolio estructurado
 * como documentos atómicos para el RAG. Cada documento se chunkea
 * y se guarda en la tabla `chunks` con embeddings para búsqueda semántica.
 *
 * ⚠️ No incluir: API keys, rutas internas, datos de clientes reales,
 * precios de cotizaciones privadas, información sensible.
 */

export interface KnowledgeDocument {
	title: string;
	slug: string;
	category: string;
	content: string;
}

export const knowledgeDocuments: KnowledgeDocument[] = [
	// ─── ABOUT ───────────────────────────────────────────────
	{
		title: 'Iván Yarupaitán — Quién es',
		slug: 'about',
		category: 'about',
		content: `Iván Yarupaitán Rivera es un desarrollador full-stack y consultor tecnológico especializado en inteligencia artificial, con sede en Perú. Su trabajo combina precisión técnica con un enfoque en diseño premium, ayudando a marcas y estudios a construir presencia digital de alto impacto.

Su filosofía de trabajo se basa en tres pilares: tecnología bien ejecutada, diseño con propósito y comunicación clara. Prefiere proyectos donde pueda tomar decisiones arquitectónicas completas, desde la base de datos hasta la interfaz de usuario.

Iván se describe a sí mismo como un "socio tecnológico" más que un proveedor de servicios. No solo construye software; entiende el negocio del cliente y propone soluciones que resuelven problemas reales.

Su stack principal incluye SvelteKit, Convex, TailwindCSS, TypeScript y diversas herramientas de IA. También tiene experiencia con Astro, Supabase, OpenRouter, Vercel AI Gateway y múltiples APIs.`
	},
	{
		title: 'Iván Yarupaitán — Experiencia y enfoque',
		slug: 'experiencia',
		category: 'about',
		content: `Iván ha desarrollado proyectos en healthtech, edutech, legaltech y optimización de procesos gubernamentales. Sus proyectos han ganado primeros puestos en ferias de ciencia y han sido implementados en instituciones educativas y clínicas.

Su enfoque de desarrollo es "premium pero práctico": usa tecnologías modernas (Svelte 5 con runes, Convex, TailwindCSS v4) pero evita sobreingeniería. Prefiere una base de datos serverless con Convex antes que montar un backend tradicional, y elige herramientas que maximizan la entrega de valor sin sacrificar calidad.

Se mantiene actualizado con las últimas versiones del ecosistema: Svelte 5 (runes, snippets), TailwindCSS v4, Convex, Bun como runtime y Vite 7.`
	},

	// ─── STACK ───────────────────────────────────────────────
	{
		title: 'Stack Tecnológico — Frontend',
		slug: 'stack-frontend',
		category: 'stack',
		content: `Iván domina las siguientes tecnologías frontend:

SvelteKit 5: Su framework principal para aplicaciones web. Usa Svelte 5 con runes ($state, $derived, $effect, $props, $bindable) y snippets para componentes reutilizables. Prefiere SvelteKit sobre React por su menor cantidad de código boilerplate y mejor rendimiento por defecto.

TailwindCSS v4: Su framework de estilos. Usa la nueva sintaxis de TailwindCSS v4 con @theme, @apply y la integración nativa con Vite. Combina con DaisyUI v5 para componentes UI consistentes.

TypeScript: Usa TypeScript en todo el proyecto, desde el frontend hasta las funciones de Convex. Aprovecha tipos avanzados como genéricos, tipos condicionales y utility types.

Lucide Svelte: Para íconos. Prefiere Lucide sobre otras librerías por su consistencia y cobertura.

Astro: Para sitios web estáticos y landing pages que no necesitan interactividad compleja (ej: Colegio Educere, Peralta Asociados).`
	},
	{
		title: 'Stack Tecnológico — Backend y Base de Datos',
		slug: 'stack-backend',
		category: 'stack',
		content: `Iván domina las siguientes tecnologías backend:

Convex: Su plataforma backend preferida. Convex combina base de datos serverless, funciones backend (queries, mutations, actions) y sincronización en tiempo real en un solo producto. Iván usa Convex para casi todos sus proyectos porque elimina la necesidad de un backend tradicional, APIs REST y ORMs.

Preferencias de Convex:
- Schema definido en TypeScript con validación de tipos automática
- Queries reactivas que se actualizan en tiempo real
- Actions para operaciones que requieren llamadas externas (APIs, LLMs)
- Componentes reutilizables (@convex-dev/agent, @convex-dev/auth)
- Búsqueda vectorial para RAG y funcionalidades de IA

Mejor Auth: Para autenticación de dashboards y paneles de administración. Lo usa en proyectos que requieren roles y permisos.

Supabase: Lo usó en proyectos anteriores (Junin360) como base de datos y backend. Prefiere Convex para proyectos nuevos.`
	},
	{
		title: 'Stack Tecnológico — Inteligencia Artificial',
		slug: 'stack-ia',
		category: 'stack',
		content: `Iván tiene experiencia significativa integrando IA en sus proyectos:

Vercel AI Gateway: Gateway unificado para modelos de IA. Lo usa para centralizar el acceso a modelos como GPT-4o-mini, reemplazando la necesidad de múltiples API keys. Configuración: openai.chat("gpt-4o-mini") con AI_GATEWAY_API_KEY en el entorno.

OpenRouter: Alternativa a Vercel AI Gateway. Lo usó en proyectos anteriores (ENCAP, Junin360). Similar funcionalidad: acceso a múltiples modelos con una sola API key.

@convex-dev/agent: Componente de Convex para crear agentes IA con threads persistentes, tools y RAG. Iván lo usa para construir asistentes conversacionales con memoria y capacidad de búsqueda en bases de conocimiento.

Gemini API: Usado en proyectos académicos tempranos (MediRoosevelt, Farmape, Obstetra Conecta).

Deepgram STT: Para transcripción de voz a texto en español (modelo Nova-2). Integrado en Molaric para procesar audios de WhatsApp.

Livekit: Para comunicaciones en tiempo real (audio/video) en proyectos educativos (Diapis).

Kapso: Plataforma de comunicación WhatsApp Business API para enviar y recibir mensajes.`
	},

	// ─── SERVICIOS ───────────────────────────────────────────
	{
		title: 'Servicios — Desarrollo Web',
		slug: 'servicio-web',
		category: 'servicio',
		content: `Iván ofrece desarrollo web completo, desde landing pages hasta aplicaciones web complejas. Su enfoque es construir productos digitales premium con tecnología moderna.

Tipos de proyectos que construye:
- Landing pages y sitios corporativos con diseño editorial premium
- Dashboards y paneles de administración
- Sistemas web con autenticación, roles y permisos
- Aplicaciones en tiempo real (chat, notificaciones, sincronización)
- Plataformas multi-tenant
- Integraciones con APIs externas (Google Calendar, WhatsApp, pagos)

Su proceso: reunión inicial para entender el negocio, propuesta técnica y de diseño, desarrollo iterativo con feedback constante, deployment y soporte.

Stack típico: SvelteKit + Convex + TailwindCSS + TypeScript. Despliegue en Vercel.`
	},
	{
		title: 'Servicios — Inteligencia Artificial y Agentes',
		slug: 'servicio-ia',
		category: 'servicio',
		content: `Iván se especializa en construir agentes de IA conversacionales que resuelven problemas reales de negocio.

Tipos de proyectos de IA que construye:
- Agentes conversacionales vía WhatsApp que agendan citas, responden preguntas y gestionan recordatorios
- Asistentes virtuales con RAG (búsqueda semántica en bases de conocimiento propias)
- Sistemas de transcripción y análisis de voz
- Tutores IA personalizados para educación
- Automatización de procesos con IA (clasificación, extracción de datos, generación de informes)

Stack típico: Convex Agent + Vercel AI Gateway + WhatsApp (Kapso) + Deepgram STT.`
	},
	{
		title: 'Servicios — WaaS (Web as a Service)',
		slug: 'servicio-waas',
		category: 'servicio',
		content: `WaaS es un modelo de suscripción mensual donde Iván actúa como socio tecnológico del cliente. Incluye:

- Desarrollo y mantenimiento del sitio web o aplicación
- Hosting y dominio gestionados
- Actualizaciones de seguridad y mantenimiento continuo
- Soporte técnico prioritario
- Optimización de rendimiento y SEO

El modelo WaaS está diseñado para estudios jurídicos, clínicas, consultorios y pequeñas empresas que necesitan presencia digital profesional sin la complejidad de gestionar tecnología internamente.

Cada proyecto WaaS incluye: diseño premium, desarrollo con stack moderno, despliegue en Vercel, analytics, formularios de contacto, y actualizaciones periódicas.`
	},

	// ─── PRICING ────────────────────────────────────────────
	{
		title: 'Modelo de Precios y Colaboración',
		slug: 'precios',
		category: 'pricing',
		content: `Iván ofrece dos modelos principales de colaboración:

Modelo WaaS (Web as a Service):
- Suscripción mensual que inicia desde S/ 30/mes
- Incluye desarrollo, hosting, dominio, mantenimiento y soporte
- Ideal para estudios, clínicas y pequeñas empresas
- Sin costos ocultos, sin contratos largos

Modelo Proyecto:
- Cotización por proyecto según alcance y complejidad
- Ideal para aplicaciones web complejas, sistemas con IA, plataformas multi-tenant
- Incluye: análisis, diseño, desarrollo, testing, deployment y documentación
- Se entrega el código fuente completo

Ambos modelos incluyen consultoría inicial gratuita para entender el proyecto y proponer la mejor solución tecnológica.

Iván trabaja con empresas en Perú y Latinoamérica. Los pagos pueden ser en soles (S/) o dólares (USD) según preferencia del cliente.`
	},

	// ─── PROYECTOS ──────────────────────────────────────────
	{
		title: 'Proyecto: Molaric',
		slug: 'proyecto-molaric',
		category: 'proyecto',
		content: `Molaric es un agente de inteligencia artificial para clínicas dentales que funciona 24/7 a través de WhatsApp. Los pacientes pueden agendar, reprogramar o cancelar citas mediante conversaciones naturales, mientras que el sistema sincroniza automáticamente con Google Calendar de la clínica.

Tecnologías: SvelteKit, Convex, Vercel AI Gateway, Google Calendar API, TailwindCSS, Better Auth, TypeScript, Deepgram STT, Kapso WhatsApp.

Cliente: Clínicas Dentales.
Fecha: Abril 2026.
Rol de Iván: Full-Stack Developer & AI Engineer. Lideró el desarrollo completo desde la arquitectura del agente IA hasta la interfaz del dashboard.

Características principales:
- Pacientes interactúan vía WhatsApp para agendar, reprogramar o cancelar citas
- Sincronización bidireccional automática con Google Calendar
- Recordatorios inteligentes con confirmación Sí/No vía WhatsApp
- Dashboard web con métricas en tiempo real: total de pacientes, citas creadas, citas sincronizadas
- Interruptor para desactivar el agente desde el dashboard principal
- Gestión de pacientes: crear, editar, eliminar con información detallada incluyendo sede
- Gestión de citas con filtro por estado (pendiente, confirmada, completada, cancelada)
- Acceso a recordatorios por cada cita
- Configuración flexible de horarios con fechas especiales y excepciones
- Gestión de procedimientos dentales con precio y duración
- Múltiples sucursales, cada una con su propio horario y dirección
- Arquitectura multi-tenant con datos aislados por clínica
- Transcripción de voz para audios de WhatsApp (Deepgram)
- Sistema de roles y permisos para el staff

Impacto: Disponibilidad 24/7 del agente, 100% de citas sincronizadas con Google Calendar, reducción del 30% de ausencias por recordatorios automáticos, aumento del 40% en citas agendadas fuera del horario laboral.

URL: https://molaric.com/
Video: https://www.youtube.com/watch?v=6OByh4IlgTU`
	},
	{
		title: 'Proyecto: ENCAP',
		slug: 'proyecto-encap',
		category: 'proyecto',
		content: `ENCAP es un tutor con inteligencia artificial diseñado para mejorar la experiencia de aprendizaje de los estudiantes. El tutor tiene conocimiento general y específico de cada curso, brindando apoyo personalizado y eficiente.

Tecnologías: SvelteKit, Lit, OpenRouter, Convex.

Cliente: Institución Educativa.
Fecha: Enero 2026.

Características principales:
- Tutor IA con conocimiento general y específico por curso
- Interfaz conversacional para resolver dudas académicas
- Apoyo personalizado según el nivel del estudiante
- Integración con el plan de estudios existente

URL: https://www.encap.edu.pe/`
	},
	{
		title: 'Proyecto: Junin360',
		slug: 'proyecto-junin360',
		category: 'proyecto',
		content: `Junin360 es una plataforma de control de informes para el Gobierno Regional de Junín (GORE Junín). Utiliza tecnologías modernas e IA para alertar a los responsables y eliminar el riesgo de responsabilidades legales.

Tecnologías: SvelteKit, Supabase, OpenRouter, n8n.

Cliente: GORE Junín (Gobierno Regional).
Fecha: Setiembre 2025.

Características principales:
- Control y seguimiento de informes de gestión
- Alertas inteligentes para responsables
- Automatización de procesos con n8n
- Dashboard con métricas y estadísticas
- Eliminación de riesgos de responsabilidades legales por incumplimiento

URL: https://junin360.com/`
	},
	{
		title: 'Proyecto: MediRoosevelt',
		slug: 'proyecto-mediroosevelt',
		category: 'proyecto',
		content: `Proyecto para los alumnos de la escuela profesional de Medicina Humana de la Universidad Roosevelt. Ganó el primer puesto en la Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.

Cliente: Universidad Roosevelt.
Fecha: Noviembre 2025.

URL: https://mediroosevelt.com/
Video: https://www.youtube.com/watch?v=2RlIn3JFajc`
	},
	{
		title: 'Proyecto: Farmape',
		slug: 'proyecto-farmape',
		category: 'proyecto',
		content: `Proyecto para los alumnos de la escuela profesional de Farmacia de la Universidad Roosevelt. Ganó el primer puesto en la Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.

Cliente: Universidad Roosevelt.
Fecha: Noviembre 2025.

URL: https://www.farmape.net/
Video: https://www.youtube.com/watch?v=6-3bhIxR4-k`
	},
	{
		title: 'Proyecto: Obstetra Conecta',
		slug: 'proyecto-obstetraconecta',
		category: 'proyecto',
		content: `Proyecto para las alumnas de la escuela profesional de Obstetricia de la Universidad Roosevelt. Ganó el segundo puesto en la Expociencia 2025 - II.

Tecnologías: Svelte, Convex, TypeScript, Gemini API.

Cliente: Universidad Roosevelt.
Fecha: Noviembre 2025.

URL: https://www.obstetraconecta.com/
Video: https://www.youtube.com/watch?v=tVvpd5Wp98k`
	},
	{
		title: 'Proyecto: Diapis',
		slug: 'proyecto-diapis',
		category: 'proyecto',
		content: `Diapis es un sistema de IA que revoluciona el aprendizaje en el aula. Genera rondas de preguntas y respuestas personalizadas a partir del material de clase para impulsar la atención y la participación estudiantil.

Tecnologías: SvelteKit, Convex, Livekit, Gemini API.

Cliente: Institución Educativa.
Fecha: Octubre 2025.

Características principales:
- Generación automática de preguntas y respuestas desde el material de clase
- Participación estudiantil en tiempo real
- Seguimiento del progreso individual
- Integración con Livekit para comunicación en vivo

URL: https://diapis.vercel.app/
Video: https://www.youtube.com/watch?v=nHPqMsQJLFw`
	},
	{
		title: 'Proyecto: Colegio Educere',
		slug: 'proyecto-colegio-educere',
		category: 'proyecto',
		content: `Sitio web del Colegio Educere, una institución educativa en Huancayo. El sitio está diseñado para proporcionar información clara y accesible sobre los programas académicos, actividades extracurriculares, facilitando la comunicación entre padres, estudiantes y el personal educativo.

Tecnologías: Astro, TailwindCSS.

Cliente: Colegio Educere.
Fecha: Diciembre 2025.

URL: https://colegioeducere.edu.pe/`
	},
	{
		title: 'Proyecto: Peralta & Asociados',
		slug: 'proyecto-peralta-asociados',
		category: 'proyecto',
		content: `Construcción de identidad digital de alto impacto para el estudio jurídico Peralta & Asociados. Sitio web diseñado con la arquitectura más moderna (Astro/Tailwind) para garantizar la máxima velocidad, posicionamiento SEO y la atracción de nuevos clientes.

Tecnologías: Astro, TailwindCSS, Netlify Forms.

Cliente: Estudio Jurídico Peralta & Asociados.
Fecha: Enero 2025.

URL: https://peraltaasociados.com/`
	}
];
