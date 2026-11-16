import { contactEmail, contactLimits } from '../../src/site-config'

type ContactEnv = {
  CLOUDFLARE_ACCOUNT_ID?: string
  CLOUDFLARE_EMAIL_API_TOKEN?: string
  CONTACT_FROM?: string
}

type DeliveryResult = {
  success?: boolean
  result?: { delivered?: string[], queued?: string[] } | null
}

const maxBodySize = 40 * 1024
const emailAddress = /^[^\s@<>(),]+@[^\s@<>(),]+\.[^\s@<>(),]+$/
const sendFailure = 'I couldn’t receive your message. Please try again or email me directly.'

function reply(request: Request, status: number, message: string) {
  const headers = { 'Cache-Control': 'no-store' }
  return request.headers.get('Accept')?.includes('application/json')
    ? Response.json({ ok: status === 200, message }, { status, headers })
    : new Response(message, { status, headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' } })
}

export async function onRequestPost({ request, env }: { request: Request, env: ContactEnv }) {
  if (request.headers.get('Origin') !== new URL(request.url).origin) {
    return reply(request, 403, sendFailure)
  }

  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/x-www-form-urlencoded')) {
    return reply(request, 415, sendFailure)
  }

  const { CLOUDFLARE_ACCOUNT_ID: accountId, CLOUDFLARE_EMAIL_API_TOKEN: token, CONTACT_FROM: from } = env
  if (!accountId || !token || !from) {
    return reply(request, 503, 'Online sending is unavailable right now. Please email me directly.')
  }

  if (Number(request.headers.get('Content-Length')) > maxBodySize) {
    return reply(request, 413, 'Please shorten your message and try again.')
  }

  let fields: URLSearchParams
  try {
    const body = await request.text()
    if (new TextEncoder().encode(body).byteLength > maxBodySize) {
      return reply(request, 413, 'Please shorten your message and try again.')
    }
    fields = new URLSearchParams(body)
  } catch {
    return reply(request, 400, sendFailure)
  }

  const name = fields.get('name')?.trim() ?? ''
  const email = fields.get('email')?.trim() ?? ''
  const message = fields.get('message')?.trim() ?? ''
  if (fields.get('company_website') || !name || name.length > contactLimits.name ||
    email.length > contactLimits.email || !emailAddress.test(email) ||
    !message || message.length > contactLimits.message) {
    return reply(request, 400, 'Enter your name, a valid email address, and a message.')
  }

  try {
    const delivery = await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/email/sending/send`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: contactEmail,
        reply_to: email,
        subject: 'New message from the SaShii portfolio',
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    })

    if (delivery.ok) {
      const { success, result } = await delivery.json() as DeliveryResult
      if (success && (result?.delivered?.includes(contactEmail) || result?.queued?.includes(contactEmail))) {
        return reply(request, 200, 'Message sent. Thanks for reaching out!')
      }
    }
  } catch {
    return reply(request, 502, sendFailure)
  }

  return reply(request, 502, sendFailure)
}
