// PATH: app/api/services/route.ts
import { dbConnect } from '@/lib/db';
import Service from '@/models/Service';

// Ensure Node runtime (Mongo/JWT libs aren’t Edge-safe)
export const runtime = 'nodejs';

// Insert shape (no _id/timestamps)
type NewService = {
    title: string;
    slug: string;
    summary: string;
    features: string[];
    priceRange?: string;
};

export async function GET() {
    await dbConnect();

    // ✅ Use options-style lean AND cast model once to avoid TS overload issues
    const S = Service as any;

    let items = await S.find({}, null, { lean: true }).exec();
    if (items?.length) return Response.json(items);

    const defaults: NewService[] = [
        { title: 'Web Design & Development', slug: 'web-design-development', summary: 'Modern websites with Next.js & SEO best practices.', features: ['Next.js','SEO','Fast & secure'] },
        { title: 'Mobile Apps Development', slug: 'mobile-apps-development', summary: 'Cross-platform apps that scale.', features: ['React Native','App Store/Play Store','Analytics'] },
        { title: 'UI/UX', slug: 'ui-ux', summary: 'Beautiful, usable interfaces.', features: ['Wireframes','Prototypes','Design systems'] },
        { title: 'Graphics Design', slug: 'graphics-design', summary: 'Branding, logos, and assets.', features: ['Logos','Brand kits','Marketing assets'] },
        { title: 'Digital Marketing', slug: 'digital-marketing', summary: 'SEO, ads, and social growth.', features: ['SEO','SEM','Content'] },
        { title: 'Cyber Security', slug: 'cyber-security', summary: 'Audits & hardening.', features: ['Audits','Hardening','Training'] },
    ];

    await S.insertMany(defaults);

    items = await S.find({}, null, { lean: true }).exec();
    return Response.json(items);
}
