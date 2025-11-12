// PATH: app/projects/page.tsx
import Link from "next/link";

const projects = Array.from({ length: 6 }).map((_, i) => ({
    name: `Project ${i + 1}`,
    slug: `project-${i + 1}`,
    image: `https://picsum.photos/seed/nextsphere${i}/800/540`,
}));

export default function ProjectsPage() {
    return (
        <section>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="block group"
                            aria-label={`Open ${p.name}`}
                        >
                            {/* Animated gradient border wrapper */}
                            <div className="gradient-border rounded-3xl transition-transform duration-300 group-hover:-translate-y-1">
                                <div className="inner rounded-3xl overflow-hidden">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold">{p.name}</h3>
                                        <p className="text-xs text-slate-600 dark:text-slate-300">
                                            Placeholder — click to view details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
