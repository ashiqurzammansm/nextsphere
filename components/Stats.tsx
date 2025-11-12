// PATH: components/Stats.tsx
const stats = [
    { value: "30+", label: "Projects delivered" },
    { value: "10/10", label: "Client happiness" },
    { value: "5+", label: "Years experience" },
    { value: "∞", label: "Ideas we can build" },
];

export default function Stats() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {stats.map((s) => (
                        <div key={s.label} className="card">
                            <div className="text-3xl font-extrabold text-[#2563eb]">{s.value}</div>
                            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
