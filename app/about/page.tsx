export default function AboutPage() {
    const team = [
        { name: "Ava Thompson", role: "CEO", avatar: "https://i.pravatar.cc/120?img=1" },
        { name: "Liam Carter", role: "CTO", avatar: "https://i.pravatar.cc/120?img=2" },
        { name: "Maya Singh", role: "Lead Designer", avatar: "https://i.pravatar.cc/120?img=3" },
        { name: "Noah Kim", role: "Full-Stack Engineer", avatar: "https://i.pravatar.cc/120?img=4" },
    ];

    const facts = [
        { label: "Founded", value: "2021" },
        { label: "HQ", value: "Remote-first" },
        { label: "Focus", value: "Web, Mobile, UI/UX" },
        { label: "Clients", value: "Startups & SMEs" },
    ];

    return (
        <section>
            <div className="container">
                <h1 className="text-4xl font-bold">About NextSphere</h1>
                <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl">
                    We build delightful digital products—mixing strategy, design, and engineering.
                    Our goal is simple: ship fast, look great, and create impact for our clients.
                </p>

                <div className="mt-8 grid md:grid-cols-4 gap-4">
                    {facts.map((f) => (
                        <div key={f.label} className="card text-center">
                            <div className="text-2xl font-bold text-[#2563eb]">{f.value}</div>
                            <div className="text-sm text-slate-500 mt-1">{f.label}</div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((m) => (
                        <div key={m.name} className="card text-center">
                            <img
                                src={m.avatar}
                                alt={m.name}
                                className="mx-auto h-24 w-24 rounded-full object-cover"
                            />
                            <div className="mt-3 font-semibold">{m.name}</div>
                            <div className="text-sm text-slate-500">{m.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
