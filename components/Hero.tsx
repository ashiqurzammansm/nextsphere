// PATH: components/Hero.tsx
export default function Hero() {
    return (
        <section
            className="relative overflow-hidden min-h-screen"
            style={{
                backgroundImage: "url('/hero-bg.svg?v=5')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#1e293b",
            }}
        >
            {/* Additional soft glow for depth */}
            <div
                className="absolute left-1/2 top-24 h-[420px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(37,99,235,0.45), transparent 70%)",
                    zIndex: 1,
                }}
                aria-hidden="true"
            />

            <div className="container pt-28 pb-16 text-center text-white relative z-10">
                {/* Tagline pill */}
                <div className="inline-block rounded-3xl border border-white/20 bg-white/10 px-4 py-1 text-[11px] tracking-wide uppercase">
                    NextSphere Technologies
                </div>

                {/* Headline */}
                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#93c5fd] via-white to-[#c4b5fd]">
                        Code. Create. Inspire.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="mt-4 text-lg/7 text-white/85 max-w-2xl mx-auto">
                    We craft gorgeous, high-performance web & mobile experiences — secure,
                    scalable, and designed to delight.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex justify-center gap-4">
                    <a href="/services" className="btn btn-primary">
                        Explore Services
                    </a>
                    <a
                        href="/projects"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-all border border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60"
                    >
                        See Projects
                    </a>
                </div>

                {/* Quick metrics */}
                <div className="mx-auto mt-10 grid grid-cols-3 max-w-xl gap-4 text-left text-white/90">
                    <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                        <div className="text-2xl font-bold">30+</div>
                        <div className="text-xs opacity-80">Successful Projects</div>
                    </div>
                    <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                        <div className="text-2xl font-bold">6</div>
                        <div className="text-xs opacity-80">Core Services</div>
                    </div>
                    <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-xs opacity-80">Client Satisfaction</div>
                    </div>
                </div>

                {/* Decorative floating blobs */}
                <div className="pointer-events-none relative">
                    <div className="absolute left-1/4 top-12 h-24 w-24 rounded-full bg-blue-400/25 blur-3xl animate-floatFast" />
                    <div className="absolute right-1/5 top-24 h-28 w-28 rounded-full bg-purple-400/25 blur-3xl animate-floatSlow" />
                    <div className="absolute left-1/2 top-40 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-400/20 blur-3xl animate-float" />
                </div>
            </div>
        </section>
    );
}
