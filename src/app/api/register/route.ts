import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventTitle, message } = body;

    if (!name || !email || !eventTitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'OCHFA Events <no-reply@ochfa.ca>',
      to: ['qumbi@ochfa.ca'],
      subject: `New Registration for Event: ${eventTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0ea5e9; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Event Registration</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 32px;">
              <span style="background-color: #e0f2fe; color: #0284c7; padding: 8px 16px; border-radius: 999px; font-weight: bold; font-size: 16px;">
                ${eventTitle}
              </span>
            </div>
          
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 120px;"><strong style="color: #64748b;">Attendee</strong></td>
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
            </table>
            
            ${message ? `
            <div style="margin-top: 32px;">
              <strong style="color: #64748b; display: block; margin-bottom: 12px;">Questions/Comments:</strong>
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
            ` : ''}
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #eee;">
            This email was automatically generated from the OCHFA website event registration form.
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
