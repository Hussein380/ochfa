import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, phone, ...customFields } = body;

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Build the custom fields HTML dynamically
    const customFieldsHtml = Object.entries(customFields)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 150px; text-transform: capitalize;"><strong style="color: #64748b;">${key.replace(/([A-Z])/g, ' $1').trim()}</strong></td>
          <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0f172a; white-space: pre-wrap;">${value}</td>
        </tr>
      `).join('');

    const { data, error } = await resend.batch.send([
      // 1. Admin Notification Email
      {
        from: 'OCHFA Website <no-reply@ochfa.ca>',
        to: ['info@ochfa.ca'],
        replyTo: email,
        subject: `New ${type} Submission from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0f172a; padding: 24px; text-align: center;">
              <img src="https://www.ochfa.ca/images/ochfalogo.jpeg" alt="OCHFA Logo" style="height: 60px; border-radius: 8px; margin-bottom: 16px;" />
              <h1 style="color: white; margin: 0; font-size: 24px;">New ${type} Application</h1>
            </div>
            <div style="padding: 32px; background-color: #ffffff;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 150px;"><strong style="color: #64748b;">Applicant</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0f172a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong style="color: #64748b;">Email</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0f172a;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong style="color: #64748b;">Phone</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0f172a;">${phone || 'Not provided'}</td>
                </tr>
                ${customFieldsHtml}
              </table>
            </div>
            <div style="background-color: #f8fafc; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #eee;">
              This email was automatically generated from the OCHFA website.<br/>
              <strong>You can reply directly to this email to contact ${name}.</strong>
            </div>
          </div>
        `,
      },
      // 2. User Auto-Responder Email
      {
        from: 'OCHFA <no-reply@ochfa.ca>',
        to: [email],
        subject: `Thank you for your interest in OCHFA!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #ffffff; padding: 32px; text-align: center; border-bottom: 4px solid #0ea5e9;">
              <img src="https://www.ochfa.ca/images/ochfalogo.jpeg" alt="OCHFA Logo" style="height: 80px; border-radius: 8px; margin-bottom: 24px;" />
              <h1 style="color: #0f172a; margin: 0 0 16px 0; font-size: 28px;">Thank You, ${name}!</h1>
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0;">
                We have received your <strong>${type}</strong> application. 
                Thank you so much for your interest in getting involved with OCHFA. Our team will be reviewing your submission and will get back to you shortly!
              </p>
            </div>
            <div style="background-color: #0f172a; padding: 24px; text-align: center; color: #94a3b8; font-size: 14px;">
              One Community Home & Family Association (OCHFA)<br/>
              1502 12 Ave SW, Calgary, AB<br/>
              <a href="https://www.ochfa.ca" style="color: #0ea5e9; text-decoration: none;">www.ochfa.ca</a>
            </div>
          </div>
        `
      }
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
