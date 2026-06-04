# 📋 Tasks — Especificaciones del proyecto

> **Carpeta de especificaciones y tareas técnicas para el proyecto Vanchi.**
> Cada archivo aquí representa una especificación, feature, o requerimiento documentado.

## Propósito

Centralizar las especificaciones funcionales y técnicas del proyecto para que tanto desarrolladores humanos como agentes de IA (pi) puedan consultar el contexto completo de lo que se ha definido, lo que está en curso y lo que ya se completó.

## Estructura

```
tasks/
├── README.md           ← Este archivo
├── *.md                ← Especificaciones activas (pendientes o en curso)
└── archived/
    └── *.md            ← Especificaciones ya completadas / cerradas
```

## Convenciones

- Cada especificación es un archivo Markdown independiente.
- Usar nombres descriptivos en inglés o español, separados por guiones (`especificacion-ejemplo.md`).
- Una vez que una especificación se completa, se mueve a `tasks/archived/`.
- Mantener este índice actualizado si el número de archivos crece significativamente.

## Ciclo de vida de una especificación

1. **Creación** — Se escribe el archivo en `tasks/` con el detalle de lo que se necesita.
2. **Ejecución** — El agente (o desarrollador) consulta la especificación y la implementa.
3. **Archivado** — Una vez completada, se mueve a `tasks/archived/` con nota de cierre.

## Estado actual

| Archivo | Estado |
|---------|--------|
| *(pendiente)* | — |
