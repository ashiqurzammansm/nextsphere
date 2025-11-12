// PATH: app/services/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

const services: Record<
    string,
    { title: string; banner: string; bullets: { icon: string; text: string }[] }
> = {
    "web-design-development": {
        title: "Web Design & Development",
        banner: "https://picsum.photos/seed/webdev/1200/400",
        bullets: [
            { icon: "⚡", text: "Next.js sites, fast & SEO-friendly" },
            { icon: "🔐", text: "Secure, scalable architecture" },
            { icon: "🧩", text: "Reusable components & design system" },
            { icon: "📈", text: "Analytics, forms, and integrations" },
        ],
    },
    "mobile-apps-development": {
        title: "Mobile Apps Development",
        banner: "https://picsum.photos/seed/mobile/1200/400",
        bullets: [
            { icon: "📱", text: "iOS & Android from one codebase" },
            { icon: "☁️", text: "APIs, push notifications, auth" },
            { icon: "🧪", text: "Tested and monitored builds" },
            { icon: "🚀", text: "App Store & Play Store publishing" },
        ],
    },
    "ui-ux": {
        title: "UI/UX",
        banner: "https://picsum.photos/seed/uiux/1200/400",
        bullets: [
            { icon: "🎨", text: "Wireframes → hi-fi designs" },
            { icon: "🧭", text: "User flows & information architecture" },
            { icon: "🧪", text: "Prototypes & usability testing" },
            { icon: "📚", text: "Design tokens & components" },
        ],
    },
    "graphics-design": {
        title: "Graphics Design",
        banner: "https://picsum.photos/seed/graphics/1200/400",
        bullets: [
            { icon: "🖌️", text: "Logos & brand kits" },
            { icon: "🧾", text: "Pitch decks & marketing assets" },
            { icon: "🖼️", text: "Social media creatives" },
            { icon: "🧭", text: "Brand guidelines" },
        ],
    },
    "digital-marketing": {
        title: "Digital Marketing",
        banner: "https://picsum.photos/seed/marketing/1200/400",
        bullets: [
            { icon: "🔍", text: "SEO & technical audits" },
            { icon: "📣", text: "Content & social growth" },
            { icon: "💸", text: "Ads & performance campaigns" },
            { icon: "📊", text: "Reporting & optimization" },
        ],
    },
    "cyber-security": {
        title: "Cyber Security",
        banner: "https://picsum.photos/seed/security/1200/400",
        bullets: [
            { icon: "🛡️", text: "Security audits & hardening" },
            { icon: "🔏", text: "Best practices for auth & data" },
            { icon: "🧯", text: "Incident response planning" },
            { icon: "🎓", text: "Team training & checklists" },
        ],
    },
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const svc = services[params.slug];
    if (!svc) return notFound();

    return (
        <section>
            <div className="container">
                <h1 className="text-4xl font-bold">{svc.title}</h1>

                <div className="mt-6 gradient-border rounded-3xl">
                    <div className="inner rounded-3xl overflow-hidden">
                        <Image
                            src={svc.banner}
                            alt={svc.title}
                            width={1200}
                            height={400}
                            className="w-full h-[260px] md:h-[320px] object-cover"
                        />
                    </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {svc.bullets.map((b) => (
                        <div key={b.text} className="card flex items-start gap-3">
                            <div className="text-xl">{b.icon}</div>
                            <div className="text-slate-700 dark:text-slate-200">{b.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
