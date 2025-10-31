import Link from 'next/link';

const projects = Array.from({ length: 3 }).map((_, i) => ({
    name: `Project ${i + 1}`,
    slug: `project-${i + 1}`,
    image: `https://picsum.photos/seed/nextsphere${i}/900/560`,
}));

export default function ProjectsPreview() {
    return (
        <section>
            <div className="container">
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-bold">Featured projects</h2>
                        <p className="text-slate-600 dark:text-slate-300">A peek at recent work (placeholders—swap anytime).</p>
                    </div>
                    <Link href="/projects" className="btn btn-ghost">View all</Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                            <div className="gradient-border rounded-3xl transition-transform duration-300 group-hover:-translate-y-1">
                                <div className="inner rounded-3xl overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="font-semibold">{p.name}</h3>
                                        <p className="text-xs text-slate-600 dark:text-slate-300">Click to view details</p>
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
