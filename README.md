# Creo Apps · Web de proyectos

Página con todas las apps de la serie "Día N haciendo apps" de TikTok: se pueden descargar o revisar qué hace cada una.
Usa el mismo estilo que la web de Agendin (tipo Apple, con modo oscuro).

- `/`: lista de proyectos y el tutorial.
- `/apps/<slug>`: página de cada app (portada del video, descripción, funciones y enlaces).

## Agregar o editar un proyecto

1. Edita `src/data/projects.ts` (nombre, día, descripción, funciones, estado y enlaces).
   - `status: 'store'` muestra "Descargar"; `status: 'review'` muestra "Muy pronto" y la palabra para comentar.
2. Agrega dos imágenes a `public/apps/`: `<slug>-icon.png` (256×256) y `<slug>-portada.jpg` (720×1280).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Despliegue

Importa el repositorio en Vercel; no hace falta configurar nada. La URL para compartir en redes se toma sola del dominio de producción.
