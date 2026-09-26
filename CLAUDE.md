# BajoMarDemo — DEMO DE PORTAFOLIO (no es un cliente real)

Todo dato de contacto, reseña, precio y cifra de este proyecto es FALSO / de prueba. Nunca presentarlos como reales.

Archivo principal: `index.html` (landing de una página con anclas). HTML + CSS + JS vanilla, sin frameworks ni dependencias de terceros salvo Google Fonts (Anton + Inter).

Estructura:
- `index.html`
- `css/style.css`
- `js/main.js` — slider del hero, menú móvil, preselección de paquete y validación del formulario
- `img/*.webp` — 6 fotos de Pexels optimizadas (máx. 1600px de ancho, 2400px la de portada `superyate-perfil.webp`)
- `favicon.svg`

## Datos de prueba (FALSOS)
- Nombre: BajoMarDemo
- Teléfono: (305) 555-0142 · WhatsApp: 13055550142
- Email: contacto@bajomardemo.com (gmail de prueba: bajomardemo.demo@gmail.com)
- Dirección: 1500 Bayshore Dr, Miami, FL 33133 (marina ficticia)
- Horario: todos los días 8:00 AM – 8:00 PM
- Licencia charter: [FALTA] — no inventar

## Contenido de ejemplo (FALSO)
- Testimonios: "Cliente de ejemplo 1–4" (inventados)
- Precios: Medio día $950 / Día completo $1,700 / Evento $2,400 — ejemplo
- Franja del hero (capacidad, duración) y duraciones/capacidades de servicios — ejemplo
- Calificación Google y nº de reseñas: [FALTA]
- Depósito, cancelación, propina, póliza de seguro, combustible, estacionamiento, licencias de pesca: [FALTA]/[CONFIRMAR]
- Posts del blog: títulos y resúmenes de ejemplo
- Redes sociales: enlaces "#" placeholder
- Mapa: placeholder (sin embed real)

## Reglas
- Mantener `noindex, nofollow` y la franja "Vista previa · Sitio demo" mientras sea demo.
- El formulario no envía nada: solo valida y guarda en localStorage (`bajomardemo_leads`).
- Fotos en `img/` vienen de Pexels (subidas por el usuario); son de referencia, no del negocio.

## Nota de reconstrucción
Este sitio se reconstruyó desde un export del canvas de Diseño de Claude (`Crear un sitio web/BajoMar Landing.dc.html`, React + Babel vía unpkg) a HTML/CSS/JS plano. Esa carpeta original queda al lado como referencia pero ya no se usa para servir el sitio; puede archivarse o borrarse cuando ya no se necesite.
