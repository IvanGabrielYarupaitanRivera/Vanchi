# 📚 Vanchi — Documentation Hub

> Portal central de documentación del proyecto **Vanchi**.
> Diseñado para que agentes de IA (pi) y desarrolladores humanos encuentren rápido el contexto que necesitan.

## 📁 Estructura completa

```
docs/
├── README.md                           # ← ESTE ARCHIVO — Portal de entrada
├── ALIADAS.md                          # Aliados IA: qué consultar según el problema
├── CHEATSHEET.md                       # Referencia rápida: comandos, helpers, convenciones
├── CHANGELOG.md                        # 📜 Historial de cambios del proyecto
├── 00-GUIDE/                           # 🔴 Guía principal (LEER PRIMERO)
│   ├── README.md                       #   Presentación de la guía
│   ├── CONTEXT.md                      #   Contexto del proyecto (⬅️ empezar aquí)
│   ├── NAVIGATION.md                   #   GPS: qué leer según la tarea
│   ├── WORKFLOW.md                     #   Ciclo Spec → Code → Verify
│   ├── STACK-PATTERNS.md               #   Reglas obligatorias del stack
│   └── LECCIONES-APRENDIDAS/           #   Decisiones clave (1 archivo = 1 lección)
│       ├── README.md                   #     Índice de lecciones
│       └── YYYY-MM-DD-TITULO.md        #     Lección individual
├── 01-PROJECT/                         # 🟡 Visión del proyecto
│   ├── README.md                       #   Visión general
│   ├── VISION.md                       #   Propósito y objetivos
│   └── ROADMAP.md                      #   Hitos planificados
├── 02-FRONTEND/                        # 🟡 Frontend
│   └── README.md                       #   Rutas, componentes, patrones UI
├── 04-ARCHITECTURE/                    # 🟡 Arquitectura
│   ├── README.md                       #   Decisiones arquitectónicas
│   ├── OVERVIEW.md                     #   Diagrama general del sistema
│   ├── DATA-FLOW.md                    #   Flujos de datos
│   └── ADR.md                          #   Architecture Decision Records
├── 05-SETUP/                           # 🟢 Setup (una vez)
│   ├── README.md                       #   Cómo levantar el proyecto
│   ├── LOCAL-DEV.md                    #   Desarrollo local paso a paso
│   ├── ENV.md                          #   Variables de entorno
│   └── INTEGRATIONS.md                 #   Servicios externos (Vercel, etc.)
├── 06-BUSINESS-RULES/                  # 🟡 Reglas de negocio
│   ├── README.md                       #   Reglas + principios core
│   └── CORE-PRINCIPLES.md              #   KISS, Single Responsibility, MVP
└── 07-DESIGN/                          # 🟡 Design system
    └── README.md                       #   Design tokens (referencia a DESIGN.md)
```

### 📋 Referencia rápida

- [`CHANGELOG.md`](./CHANGELOG.md) — 📜 Historial de cambios del proyecto
- [`CHEATSHEET.md`](./CHEATSHEET.md) — Comandos, helpers y convenciones en 1 página
- [`ALIADAS.md`](./ALIADAS.md) — Skills y aliados IA

### 📁 Documentación externa

| Archivo                     | Ubicación                                                    |
| --------------------------- | ------------------------------------------------------------ |
| Design System completo      | [`/DESIGN.md`](../DESIGN.md) (raíz del proyecto)             |
| Especificaciones activas    | [`/tasks/`](../tasks/) (raíz del proyecto)                   |
| Especificaciones archivadas | [`/tasks/archived/`](../tasks/archived/) (raíz del proyecto) |

---

> 💡 **Primera vez aquí?** Empieza por [`00-GUIDE/CONTEXT.md`](./00-GUIDE/CONTEXT.md).
> 📜 **¿Qué cambió recientemente?** Revisa [`CHANGELOG.md`](./CHANGELOG.md).
