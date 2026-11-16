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

### Formulario de contacto

El sitio envía el formulario a la función `/api/contact` de Cloudflare Pages. La función usa Cloudflare Email Service y entrega los mensajes a `bysashii@outlook.com`.

1. Configura el dominio remitente en [Cloudflare Email Sending](https://developers.cloudflare.com/email-service/get-started/send-emails/) y verifica `bysashii@outlook.com` como [destino](https://developers.cloudflare.com/email-service/configuration/email-routing-addresses/#destination-addresses).
2. En la configuración del proyecto de Pages, agrega `CLOUDFLARE_ACCOUNT_ID` y `CONTACT_FROM` como variables. `CONTACT_FROM` es una dirección del dominio remitente configurado.
3. Guarda `CLOUDFLARE_EMAIL_API_TOKEN` como secreto de Pages. El token debe tener el permiso `Email Sending: Edit` para la cuenta. Vuelve a desplegar el sitio después de configurar las variables.

Para probar la función en local, compila el sitio y ejecuta `npx wrangler pages dev dist`. Si quieres usar una cuenta real en local, guarda las variables en `.dev.vars` y deja ese archivo fuera de Git.
