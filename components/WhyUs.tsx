const items = [
    { title: "Pixel-perfect UI", desc: "Clean, modern visuals with smooth interactions.", icon: "🎨" },
    { title: "Built for speed", desc: "Next.js + caching best practices for fast loads.", icon: "⚡" },
    { title: "Secure by design", desc: "Auth, validation, and hardening in our DNA.", icon: "🛡️" },
    { title: "SEO friendly", desc: "Meta tags, OpenGraph, and great lighthouse scores.", icon: "🔍" },
];

export default function WhyUs() {
    return (
        <section>
            <div className="container">
                <h2 className="text-3xl font-bold mb-2">Why choose us</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                    We mix design and engineering to deliver beautiful, scalable products.
                </p>

                <div className="grid md:grid-cols-4 gap-6">
                    {items.map((it) => (
                        <div key={it.title} className="card">
                            <div className="text-2xl">{it.icon}</div>
                            <h3 className="font-semibold mt-2">{it.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
