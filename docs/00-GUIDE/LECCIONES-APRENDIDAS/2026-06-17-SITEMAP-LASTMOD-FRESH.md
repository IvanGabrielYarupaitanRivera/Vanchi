# 📄 Sitemap — lastmod fresco evita que Google ignore tus páginas

> **Fecha:** 2026-06-17
> **Contexto:** 3 proyectos (Peralta Asociados, Obstetra Conecta, Colegio Educere) no estaban indexados por Google pese a compartir la misma plantilla que los otros 6 proyectos que SÍ se indexaban. Todos usaban idéntico `+page.svelte`, `+page.ts` y tipo `CaseStudy`.

---

## El diagnóstico

Revisando el sitemap descubrimos que las fechas `lastmod` eran muy viejas:

```
peralta-asociados:  '2025-03-31'   ← 15 MESES sin actualizar
obstetraconecta:    '2025-11-30'   ← 7 meses
colegio-educere:    '2025-12-31'   ← 6 meses

encap:              '2026-01-31'   ← más reciente (indexado ✅)
molaric:            '2026-06-04'   ← reciente (indexado ✅)
```

Google usa `lastmod` como señal de frescura. Si una página reporta "no me actualizan hace más de un año", Google puede decidir que no vale la pena indexarla — aunque el contenido sea bueno.

**La plantilla NO era el problema.** Era la señal del sitemap.

---

## La solución

Actualizar TODOS los `lastmod` del sitemap a una fecha reciente (hoy). No hacer distinciones por proyecto. Si el sitio está vivo, todas las páginas están "frescas".

```typescript
// ❌ Antes: fechas históricas reales de cada proyecto
'peralta-asociados': '2025-03-31'

// ✅ Ahora: todas a hoy
'peralta-asociados': '2026-06-17'
```

Complementar con **solicitud de indexación manual en GSC** para cada URL no indexada.

---

## Lección

> El `lastmod` del sitemap no es un registro histórico. Es una señal para Google de "este contenido está vigente". Si una página existe y está publicada, su `lastmod` debe ser reciente. Una fecha de hace 15 meses le dice a Google "abandonada".

- ❌ No poner fechas de creación real del proyecto como `lastmod`
- ❌ No asumir que Google indexa todo lo que está en el sitemap
- ✅ Mantener `lastmod` actualizado (máximo 1-2 meses de antigüedad)
- ✅ Si una página no se indexa, verificar `lastmod` + solicitar indexación manual

---

## Archivos afectados

- `src/routes/(main)/sitemap.xml/+server.ts`
