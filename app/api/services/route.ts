import { dbConnect } from '@/lib/db';
import Service from '@/models/Service';

// GET all services from DB or fallback static list
export async function GET() {
  await dbConnect();
  const items = await Service.find().lean();
  if (items.length > 0) return Response.json(items);
  // seed default
  const defaults = [
    { title: 'Web Design & Development', slug: 'web-design-development', summary: 'Modern websites with Next.js & SEO best practices.', features: ['Next.js','SEO','Fast & secure']},
    { title: 'Mobile Apps Development', slug: 'mobile-apps-development', summary: 'Cross-platform apps that scale.', features: ['React Native','App Store/Play Store','Analytics']},
    { title: 'UI/UX', slug: 'ui-ux', summary: 'Beautiful, usable interfaces.', features: ['Wireframes','Prototypes','Design systems']},
    { title: 'Graphics Design', slug: 'graphics-design', summary: 'Branding, logos, and assets.', features: ['Logos','Brand kits','Marketing assets']},
    { title: 'Digital Marketing', slug: 'digital-marketing', summary: 'SEO, ads, and social growth.', features: ['SEO','SEM','Content']},
    { title: 'Cyber Security', slug: 'cyber-security', summary: 'Audits & hardening.', features: ['Audits','Hardening','Training']}
  ];
  await Service.insertMany(defaults);
  return Response.json(await Service.find().lean());
}
