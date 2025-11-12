// PATH: components/Testimonials.tsx
const items = [
    { name: "Jordan M.", role: "Startup Founder", text: "They moved fast and the polish is incredible. We launched on time!" },
    { name: "Priya S.", role: "Product Lead", text: "Great UX sense, clean code, and very responsive team." },
    { name: "Alex R.", role: "CTO", text: "NextSphere became our go-to partner for web and mobile." },
];

export default function Testimonials() {
    return (
        <section>
            <div className="container">
                <h2 className="text-3xl font-bold mb-6">What clients say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((t) => (
                        <div key={t.name} className="card">
                            <p className="text-slate-700 dark:text-slate-200">{t.text}</p>
                            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t.name} • {t.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
