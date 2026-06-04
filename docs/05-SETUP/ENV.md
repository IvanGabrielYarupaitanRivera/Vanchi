# 🔐 ENV — Variables de entorno

> Variables de entorno necesarias para el proyecto Vanchi.

---

## Estado actual

Actualmente el proyecto **no requiere variables de entorno** para ejecutarse en desarrollo local.

El proyecto es frontend-only con datos estáticos en TypeScript, por lo que no necesita conexión a base de datos, API keys de terceros, ni credenciales de servicios externos.

---

## Archivo `.env`

Si en el futuro se agregan integraciones que requieran variables de entorno, se deben crear:

```
Vanchi/
├── .env              # Variables locales (NO versionar)
├── .env.example      # Template con valores vacíos (versionar)
└── .env.test         # Variables para tests (versionar si aplica)
```

El `.gitignore` ya tiene configurado:

```gitignore
.env
.env.*
!.env.example
!.env.test
```

---

## Posibles variables futuras

| Variable | Propósito | ¿Obligatoria? |
|----------|-----------|---------------|
| `PUBLIC_URL` | URL base del sitio (ej: `https://www.vanchi.pro`) | Sí, para sitemap y SEO |
| `PUBLIC_ANALYTICS_ID` | ID de servicio de analytics | No |
| `PUBLIC_CONTACT_EMAIL` | Email de contacto visible en el sitio | No |
