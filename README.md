# Portafolio de Sashi

Header y hero en React, TypeScript y Vite. El HTML de producción incluye el contenido del hero prerenderizado.

## Desarrollo local

Con Node.js 22.12 o superior, ejecuta:

```sh
npm ci
npm run dev
```

Para comprobar los tipos y generar el sitio estático, ejecuta `npm run build`. Con `npm run preview` puedes revisar el contenido de `dist/`.

## Cloudflare Pages

Importa el repositorio desde GitHub en Workers & Pages. Selecciona `main` como rama de producción, `npm run build` como comando de compilación y `dist` como directorio de salida. Cuando conozcas el origen HTTPS definitivo, configura `SITE_URL` en producción para generar la URL canónica y `og:url`.
