import { NextResponse } from 'next/server';

const RECIPIENT = 'fororegionalcomie@ujat.mx';
const RECIPIENT_2 = 'arturo.corona@ujat.mx';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ff2b4f 0%, #bd243e 100%); padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">Nuevo Mensaje de Contacto — Foro TAC-IA</h2>
        </div>
        <div style="background: #fefcf6; padding: 20px; border-radius: 0 0 8px 8px;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email de respuesta:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #ff2b4f; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    `;

    // Intenta enviar notificación por email vía Abacus AI
    try {
      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_MENSAJE_DE_CONTACTO,
          subject: `Contacto TAC-IA: ${subject}`,
          body: htmlBody,
          is_html: true,
          recipient_email: RECIPIENT,
          reply_to: email,
          sender_alias: 'Foro Regional TAC-IA',
        }),
      });
    } catch (emailErr) {
      // Si falla el email, igual retornamos éxito al usuario
      console.error('Email send error (non-critical):', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Error al enviar mensaje' }, { status: 500 });
  }
}
