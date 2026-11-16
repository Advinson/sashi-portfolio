import { useState, type FormEvent } from 'react'
import { CornerRibbons } from './CornerRibbons'
import { contactEmail, contactLimits } from './site-config'

const sendFailure = 'I couldn’t receive your message. Please try again or email me directly.'

function ContactForm() {
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<{ ok: boolean, message: string } | null>(null)

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return

    const form = event.currentTarget
    const body = new URLSearchParams([...new FormData(form)].map(([field, value]) => [field, String(value)]))
    setSending(true)
    setFeedback(null)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
        signal: AbortSignal.timeout(15000),
      })
      const result = await response.json() as { ok?: boolean, message?: string }
      if (response.ok && result.ok === true) {
        setFeedback({ ok: true, message: 'Message sent. Thanks for reaching out!' })
        form.reset()
      } else {
        setFeedback({ ok: false, message: result.message ?? sendFailure })
      }
    } catch {
      setFeedback({ ok: false, message: sendFailure })
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" action="/api/contact" method="post" onSubmit={submitMessage}>
      <fieldset className="contact-fields" disabled={sending} aria-busy={sending}>
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={contactLimits.name} required />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={contactLimits.email} required />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-message">Tell me about it</label>
          <textarea id="contact-message" name="message" rows={2} maxLength={contactLimits.message} required />
        </div>
        <div className="contact-company" aria-hidden="true">
          <label htmlFor="contact-company-website">Leave this field empty</label>
          <input id="contact-company-website" name="company_website" type="text" autoComplete="off" tabIndex={-1} />
        </div>
        <button className="contact-send" type="submit">{sending ? 'sending…' : 'send'}</button>
      </fieldset>
      <p className="contact-feedback" role="status" data-success={feedback?.ok}>{feedback?.message}</p>
    </form>
  )
}

export function Contact() {
  const [name, domain] = contactEmail.split('@')

  return (
    <section id="contact" className="showcase contact" aria-labelledby="contact-title">
      <CornerRibbons />
      <div className="content-frame">
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">
              <span>Come and say hi or better</span>{' '}
              <strong>Let’s Collab!</strong>
            </h2>
            <p className="contact-lead">Share your idea with me, or I can reach out to you!</p>
            <ContactForm />
          </div>

          <div className="contact-visual">
            <img className="contact-avatar" src="/art/contact-avatar.webp" alt="Sashi’s illustrated mascot resting her face in her hands" width="1024" height="1024" loading="lazy" decoding="async" />
            <div className="contact-info">
              <p><img src="/art/honduras-monochrome.svg" alt="" width="40" height="20" /> <span>Based in <strong>Honduras</strong></span></p>
              <a href={`mailto:${contactEmail}`}><strong>{name}</strong>@{domain}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
