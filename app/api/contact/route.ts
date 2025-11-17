import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Check if Brevo API key is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Service email non configuré. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    // Send email via Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Kenomi Communication Website',
          email: process.env.BREVO_SENDER_EMAIL || 'noreply@kenomi.com',
        },
        to: [
          {
            email: process.env.BREVO_RECIPIENT_EMAIL || 'contact@kenomi.com',
            name: 'Kenomi Communication',
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Contact Website] ${subject}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #10b981 0%, #0ea5e9 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px 10px 0 0;
                  text-align: center;
                }
                .content {
                  background: #ffffff;
                  padding: 30px;
                  border: 1px solid #e5e7eb;
                  border-top: none;
                }
                .info-row {
                  margin-bottom: 20px;
                  padding-bottom: 20px;
                  border-bottom: 1px solid #f3f4f6;
                }
                .info-row:last-child {
                  border-bottom: none;
                }
                .label {
                  font-weight: 600;
                  color: #6b7280;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  margin-bottom: 5px;
                }
                .value {
                  color: #1f2937;
                  font-size: 16px;
                }
                .message-content {
                  background: #f9fafb;
                  padding: 20px;
                  border-radius: 8px;
                  border-left: 4px solid #10b981;
                  margin-top: 10px;
                }
                .footer {
                  background: #f9fafb;
                  padding: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                  border-radius: 0 0 10px 10px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Nouveau message de contact</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">kenomi.com</p>
              </div>
              <div class="content">
                <div class="info-row">
                  <div class="label">Nom</div>
                  <div class="value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="label">Sujet</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="info-row">
                  <div class="label">Message</div>
                  <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de kenomi.com</p>
                <p style="margin: 10px 0 0 0;">© ${new Date().getFullYear()} Kenomi Communication</p>
              </div>
            </body>
          </html>
        `,
        textContent: `
Nouveau message de contact - Kenomi Communication

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact de kenomi.com
        `,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API Error:', errorData);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    const responseData = await brevoResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: 'Message envoyé avec succès',
        messageId: responseData.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
