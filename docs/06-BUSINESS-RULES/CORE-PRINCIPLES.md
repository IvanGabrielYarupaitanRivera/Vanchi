# 🧠 CORE-PRINCIPLES — Principios fundamentales

> Principios que todo código y diseño en Vanchi debe seguir.

---

## 🎯 KISS — Keep It Simple, Stupid

**Regla:** Preferir la solución más simple que funcione.

**Ejemplos:**
- Datos estáticos en TypeScript en vez de CMS o base de datos
- Sin estado global complejo (stores) — props directas entre componentes
- Sin librerías externas innecesarias que añadan peso

---

## 🎯 Single Responsibility

**Regla:** Cada componente, archivo o función debe tener una sola responsabilidad clara.

**Ejemplos:**
- `ProjectService.getById()` solo busca proyectos — no renderiza UI
- `Hero.svelte` solo renderiza el hero — no contiene lógica de negocio
- Cada proyecto en `lib/data/projects/` es un archivo independiente

---

## 🎯 Mobile-first

**Regla:** Diseñar primero para mobile, luego extender a desktop.

**Práctica:**
- Los estilos base (sin media queries) son para mobile
- Solo se usa `lg:` como breakpoint para escritorio
- El layout base es single-column en mobile

---

## 🎯 Dark-only mode

**Regla:** El proyecto es dark mode exclusivo. No hay modo claro ni toggle.

**Razón:**
- La identidad visual de Vanchi se basa en fondos oscuros con acentos dorados
- Mantener un solo modo elimina complejidad de mantenimiento
- Refuerza la percepción "luxury tech" del proyecto

---

## 🎯 Un solo acento

**Regla:** El dorado (`primary`) es el único color de acento en la UI estándar.

**Práctica:**
- `text-primary` para CTAs, enlaces activos, highlights selectivos
- No introducir morados, azules, verdes, rosados o naranjas como acentos
- No usar gradientes de color en la UI general

---

## 🎯 Premium sobre feature-rich

**Regla:** Preferir una experiencia cuidada y premium sobre muchas funcionalidades.

**Práctica:**
- Menos componentes, más espaciado
- Menos badges, pills y stats compitiendo por atención
- Una idea fuerte por sección, no muchas ideas débiles

---

## 🎯 Subtraction over addition

**Regla:** En caso de duda, restar antes que sumar.

**Práctica:**
- Si un elemento no aporta claridad, se elimina
- Si un componente se puede simplificar, se simplifica
- Si una página tiene demasiadas secciones, se reducen

---

## 🎯 Type safety primero

**Regla:** Siempre tipar explícitamente los datos que cruzan fronteras de componentes o archivos.

**Práctica:**
- Interfaces en `lib/types/` para todos los modelos de datos
- Props de componentes tipadas con interfaces
- Server endpoints con tipos explícitos

---

## 🎯 Sin backend

**Regla:** El proyecto no depende de ningún backend externo, base de datos o CMS.

**Razón:**
- Portfolio personal con contenido que cambia con poca frecuencia
- Zero latency en carga de datos
- Sin costos de infraestructura
- Deploy estático + SSR sin dependencias externas

---

## 🎯 Rendimiento como feature

**Regla:** El rendimiento no es negociable. El sitio debe cargar rápido.

**Práctica:**
- Imágenes en WebP optimizadas
- Sin librerías JS pesadas
- Sin animaciones costosas que bloqueen el render
- Lighthouse scores > 90 en todas las categorías
