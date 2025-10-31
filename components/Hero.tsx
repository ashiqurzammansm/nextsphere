export default function Hero() {
    return (
        <section className="pt-16 pb-8">
            <div className="container text-center">
                <div className="inline-block rounded-3xl border border-white/10 px-4 py-1 text-xs tracking-wide uppercase opacity-80">
                    NextSphere Technologies
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#ec4899]">
            Code. Create. Inspire.
          </span>
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    We craft gorgeous websites and apps with speed, security, and soul.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a href="/services" className="btn btn-primary">Our Services</a>
                    <a href="/projects" className="btn btn-ghost" aria-label="See our projects">See Projects</a>
                </div>

                {/* subtle floating bubbles */}
                <div className="relative mt-12 h-20">
                    <div className="absolute left-1/4 top-0 h-6 w-6 rounded-full bg-blue-400/30 blur-md" />
                    <div className="absolute right-1/5 top-6 h-8 w-8 rounded-full bg-purple-400/30 blur-md" />
                    <div className="absolute left-1/2 top-3 h-10 w-10 -translate-x-1/2 rounded-full bg-rose-400/30 blur-lg" />
                </div>
            </div>
        </section>
    );
}
