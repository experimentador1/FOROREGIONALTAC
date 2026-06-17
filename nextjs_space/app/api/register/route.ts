import { NextResponse } from 'next/server';

const RECIPIENT = 'fororegionalcomie@ujat.mx';

const AXIS_LABELS: Record<string, string> = {
  '1': 'Eje 1: Analíticas del aprendizaje desde perspectivas críticas y plurales',
  '2': 'Eje 2: Entornos educativos inteligentes con enfoque decolonial e inclusivo',
  '3': 'Eje 3: Innovación pedagógica con IA y voces emergentes',
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, institution, participantType, originInstitution, researchLine, thematicAxis } = data ?? {};

    if (!fullName || !email || !institution || !participantType || !thematicAxis) {
      return NextResponse.json({ error: 'Todos los campos obligatorios deben estar completos' }, { status: 400 });
    }

    const axisLabel = AXIS_LABELS[String(thematicAxis)] ?? `Eje ${thematicAxis}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ff2b4f 0%, #bd243e 100%); padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">Nuevo Registro — Foro Regional TAC-IA</h2>
        </div>
        <div style="background: #fefcf6; padding: 20px; border-radius: 0 0 8px 8px;">
          <p><strong>Nombre:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Institución:</strong> ${institution}</p>
          <p><strong>Tipo de participante:</strong> ${participantType}</p>
          <p><strong>Eje de interés:</strong> ${axisLabel}</p>
          ${originInstitution ? `<p><strong>Institución de procedencia:</strong> ${originInstitution}</p>` : ''}
          ${researchLine ? `<p><strong>Línea de investigación:</strong> ${researchLine}</p>` : ''}
        </div>
      </div>
    `;

    try {
      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_CONFIRMACIN_DE_REGISTRO_AL_FORO,
          subject: `Nuevo registro: ${fullName} — Foro TAC-IA`,
          body: htmlBody,
          is_html: true,
          recipient_email: RECIPIENT,
          reply_to: email,
          sender_alias: 'Foro Regional TAC-IA',
        }),
      });
    } catch (emailErr) {
      console.error('Email send error (non-critical):', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Error al registrar participante' }, { status: 500 });
  }
}
