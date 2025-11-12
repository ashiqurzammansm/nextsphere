// PATH: components/Process.tsx
const steps = [
    { n: 1, title: "Discover", desc: "We understand goals, users, and constraints." },
    { n: 2, title: "Design", desc: "Wireframes → hi-fi UI → interactions." },
    { n: 3, title: "Build", desc: "Next.js, APIs, databases, and integrations." },
    { n: 4, title: "Launch", desc: "Ship, monitor, and iterate for growth." },
];

export default function Process() {
    return (
        <section>
            <div className="container">
                <h2 className="text-3xl font-bold mb-2">How we work</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">A clear, friendly process from idea to launch.</p>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((s) => (
                        <div key={s.n} className="card relative">
                            <div className="h-8 w-8 rounded-full bg-blue-500 text-white grid place-items-center font-semibold">{s.n}</div>
                            <h3 className="font-semibold mt-3">{s.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
