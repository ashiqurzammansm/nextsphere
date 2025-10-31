import Link from "next/link";

const services = [
    { title: "Web Design & Development", emoji: "🧭", summary: "Modern websites with Next.js & SEO best practices.", slug: "web-design-development" },
    { title: "Mobile Apps Development", emoji: "📱", summary: "Cross-platform apps that scale.", slug: "mobile-apps-development" },
    { title: "UI/UX", emoji: "🎨", summary: "Beautiful, usable interfaces and flows.", slug: "ui-ux" },
    { title: "Graphics Design", emoji: "🖌️", summary: "Logos, branding, and visual assets.", slug: "graphics-design" },
    { title: "Digital Marketing", emoji: "🚀", summary: "SEO, ads, and social growth.", slug: "digital-marketing" },
    { title: "Cyber Security", emoji: "🛡️", summary: "Audits, hardening, and training.", slug: "cyber-security" },
];

export default function ServicesPreview() {
    return (
        <section>
            <div className="container">
                <h2 className="text-3xl font-bold mb-2">What we do</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                    Everything you need to launch and grow — design, code, and beyond.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <Link
                            href={`/services/${s.slug}`}
                            key={s.slug}
                            className="card group transition transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">{s.emoji}</div>
                                <h3 className="font-semibold text-lg">{s.title}</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{s.summary}</p>
                            <div className="mt-3 text-sm text-[#2563eb] group-hover:underline">Learn more →</div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link href="/services" className="btn btn-primary">See all services</Link>
                </div>
            </div>
        </section>
    );
}
