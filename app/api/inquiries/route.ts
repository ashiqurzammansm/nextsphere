import { dbConnect } from '@/lib/db';
import Inquiry from '@/models/Inquiry';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  await dbConnect();
  const saved = await Inquiry.create(body);

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: 'NextSphere <no-reply@nextsphere.app>',
      to: process.env.BUSINESS_EMAIL || 'support@nextsphere.app',
      subject: 'New Inquiry from NextSphere Website',
      text: `${body.name} (${body.email}) about ${body.service}:\n${body.message}`
    });
  }

  return new Response(JSON.stringify({ ok: true, id: saved._id }), { status: 201 });
}
