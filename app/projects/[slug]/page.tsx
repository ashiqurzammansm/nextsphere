import Link from "next/link";

const KNOWN = Array.from({ length: 6 }).map((_, i) => `project-${i + 1}`);

function imageFor(slug: string, large = false) {
    // stable placeholder image per slug
    const seed = encodeURIComponent(slug);
    return `https://picsum.photos/seed/${seed}/${large ? "1200/800" : "1000/600"}`;
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const name =
        KNOWN.includes(slug)
            ? `Project ${slug.split("-").pop()}`
            : slug
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(" ");

    const data = {
        name,
        image: imageFor(slug, true),
        description:
            "This is a placeholder project page. Replace with your real case study, challenges, solutions, and images.",
        tech: ["Next.js", "MongoDB", "Tailwind"],
        url: "#",
    };

    return (
        <section>
            <div className="container">
                <nav className="text-sm mb-4 text-slate-500">
                    <Link href="/projects" className="hover:underline">
                        Projects
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-700 dark:text-slate-300">{data.name}</span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>

                <div className="mt-6 gradient-border rounded-3xl">
                    <div className="inner rounded-3xl overflow-hidden">
                        <img src={data.image} alt={data.name} className="w-full object-cover" />
                    </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 card">
                        <h2 className="font-semibold text-lg">Overview</h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-300">{data.description}</p>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <div className="card">
                                <h3 className="font-semibold">The Challenge</h3>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    Add a short description of the problem you solved.
                                </p>
                            </div>
                            <div className="card">
                                <h3 className="font-semibold">The Solution</h3>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    Describe your approach, tech decisions, and key wins.
                                </p>
                            </div>
                        </div>
                    </div>

                    <aside className="card">
                        <h3 className="font-semibold">Tech</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {data.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/20 dark:border-white/10 px-3 py-1 text-xs bg-white/60 dark:bg-white/10"
                                >
                  {t}
                </span>
                            ))}
                        </div>

                        <a
                            href={data.url}
                            className="btn btn-primary mt-5 inline-flex"
                            onClick={(e) => data.url === "#" && e.preventDefault()}
                        >
                            Visit site
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    );
}
