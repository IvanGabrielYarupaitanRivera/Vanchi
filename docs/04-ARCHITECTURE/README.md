# 🏗️ 04-ARCHITECTURE — Arquitectura

> Decisiones arquitectónicas, diagrama del sistema, flujos de datos y registros de decisiones (ADR) del proyecto Vanchi.

## ¿Qué contiene?

| Archivo | Propósito | Cuándo leerlo |
|---------|-----------|---------------|
| [`OVERVIEW.md`](./OVERVIEW.md) | Diagrama general del sistema y sus componentes | Cuando empieces a trabajar en el proyecto |
| [`DATA-FLOW.md`](./DATA-FLOW.md) | Cómo fluyen los datos desde el request hasta el render | Al debuggear o agregar una nueva ruta con datos |
| [`ADR.md`](./ADR.md) | Architecture Decision Records — decisiones justificadas | Cuando quieras entender por qué se eligió cada tecnología |

---

## 🔗 Relaciones con otras carpetas

| Documento relacionado | ¿Por qué? |
|-----------------------|-----------|
| [`02-FRONTEND/README.md`](../02-FRONTEND/README.md) | La arquitectura define cómo se organiza el frontend |
| [`00-GUIDE/STACK-PATTERNS.md`](../00-GUIDE/STACK-PATTERNS.md) | Las decisiones de stack están registradas en ADR.md |
| [`05-SETUP/INTEGRATIONS.md`](../05-SETUP/INTEGRATIONS.md) | Vercel como infraestructura de despliegue |
| [`06-BUSINESS-RULES/CORE-PRINCIPLES.md`](../06-BUSINESS-RULES/CORE-PRINCIPLES.md) | Principios que guiaron las decisiones arquitectónicas |
