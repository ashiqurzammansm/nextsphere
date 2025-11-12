// PATH: app/api/services/route.ts
import { dbConnect } from '@/lib/db';
import Service from '@/models/Service';

// Force Node.js runtime (MongoDB libs are not Edge-compatible)
export const runtime = 'nodejs';

export async function GET() {
    await dbConnect();

    // Use the "lean in options" form to avoid the TS overload issue on .lean()
    let items = await Service.find({}, null, { lean: true }).exec();

    if (items.length > 0) {
        return Response.json(items);
    }

    // Seed defaults when empty
    const defaults = [
        {
            title: 'Web Design & Development',
            slug: 'web-design-development',
            summary: 'Modern websites with Next.js & SEO best practices.',
            features: ['Next.js', 'SEO', 'Fast & secure'],
        },
        {
            title: 'Mobile Apps Development',
            slug: 'mobile-apps-development',
            summary: 'Cross-platform apps that scale.',
            features: ['React Native', 'App Store/Play Store', 'Analytics'],
        },
        {
            title: 'UI/UX',
            slug: 'ui-ux',
            summary: 'Beautiful, usable interfaces.',
            features: ['Wireframes', 'Prototypes', 'Design systems'],
        },
        {
            title: 'Graphics Design',
            slug: 'graphics-design',
            summary: 'Branding, logos, and assets.',
            features: ['Logos', 'Brand kits', 'Marketing assets'],
        },
        {
            title: 'Digital Marketing',
            slug: 'digital-marketing',
            summary: 'SEO, ads, and social growth.',
            features: ['SEO', 'SEM', 'Content'],
        },
        {
            title: 'Cyber Security',
            slug: 'cyber-security',
            summary: 'Audits & hardening.',
            features: ['Audits', 'Hardening', 'Training'],
        },
    ];

    await Service.insertMany(defaults);

    // Return freshly seeded docs (lean again via options)
    items = await Service.find({}, null, { lean: true }).exec();

    return Response.json(items);
}
