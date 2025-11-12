// PATH: app/api/services/route.ts
import { dbConnect } from '@/lib/db';
import Service, { ServiceDoc } from '@/models/Service';

// Force Node.js runtime (Mongo/JWT aren’t Edge-compatible)
export const runtime = 'nodejs';

export async function GET() {
    await dbConnect();

    // Use options-style lean to avoid the TS overload conflict
    let items = (await Service.find({}, null, { lean: true }).exec()) as ServiceDoc[];

    if (items.length > 0) {
        return Response.json(items);
    }

    // Seed defaults if empty
    const defaults: ServiceDoc[] = [
        {
            title: 'Web Design & Development',
            slug: 'web-design-development',
            summary: 'Modern websites with Next.js & SEO best practices.',
            features: ['Next.js', 'SEO', 'Fast & secure'],
            priceRange: undefined,
            createdAt: undefined as any, // will be set by Mongo
            updatedAt: undefined as any, // will be set by Mongo
            _id: undefined as any,       // will be set by Mongo
        },
        {
            title: 'Mobile Apps Development',
            slug: 'mobile-apps-development',
            summary: 'Cross-platform apps that scale.',
            features: ['React Native', 'App Store/Play Store', 'Analytics'],
            priceRange: undefined,
            createdAt: undefined as any,
            updatedAt: undefined as any,
            _id: undefined as any,
        },
        {
            title: 'UI/UX',
            slug: 'ui-ux',
            summary: 'Beautiful, usable interfaces.',
            features: ['Wireframes', 'Prototypes', 'Design systems'],
            priceRange: undefined,
            createdAt: undefined as any,
            updatedAt: undefined as any,
            _id: undefined as any,
        },
        {
            title: 'Graphics Design',
            slug: 'graphics-design',
            summary: 'Branding, logos, and assets.',
            features: ['Logos', 'Brand kits', 'Marketing assets'],
            priceRange: undefined,
            createdAt: undefined as any,
            updatedAt: undefined as any,
            _id: undefined as any,
        },
        {
            title: 'Digital Marketing',
            slug: 'digital-marketing',
            summary: 'SEO, ads, and social growth.',
            features: ['SEO', 'SEM', 'Content'],
            priceRange: undefined,
            createdAt: undefined as any,
            updatedAt: undefined as any,
            _id: undefined as any,
        },
        {
            title: 'Cyber Security',
            slug: 'cyber-security',
            summary: 'Audits & hardening.',
            features: ['Audits', 'Hardening', 'Training'],
            priceRange: undefined,
            createdAt: undefined as any,
            updatedAt: undefined as any,
            _id: undefined as any,
        },
    ];

    await Service.insertMany(defaults);

    // Return freshly seeded docs (again with lean options)
    items = (await Service.find({}, null, { lean: true }).exec()) as ServiceDoc[];

    return Response.json(items);
}
