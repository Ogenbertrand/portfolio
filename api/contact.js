const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const senderEmail = process.env.CONTACT_SENDER_EMAIL
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL

  if (!resendApiKey || !senderEmail || !receiverEmail) {
    return res.status(500).json({
      error:
        'Email service is not configured. Set RESEND_API_KEY, CONTACT_SENDER_EMAIL, and CONTACT_RECEIVER_EMAIL.'
    })
  }

  const safeName = escapeHtml(String(name).trim())
  const safeEmail = escapeHtml(String(email).trim())
  const safeSubject = escapeHtml(String(subject).trim())
  const safeMessage = escapeHtml(String(message).trim()).replace(/\n/g, '<br/>')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: senderEmail,
      to: [receiverEmail],
      reply_to: safeEmail,
      subject: `Portfolio Contact: ${safeSubject}`,
      html: `
        <h2>New message from portfolio contact form</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
      text: `New message from portfolio contact form

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`
    })
  })

  if (!response.ok) {
    const errorPayload = await response.text()
    return res.status(502).json({
      error: 'Failed to send email through provider',
      providerError: errorPayload
    })
  }

  return res.status(200).json({ ok: true })
}
