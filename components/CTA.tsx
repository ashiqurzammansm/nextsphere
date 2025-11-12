// PATH: components/CTA.tsx
export default function CTA() {
    return (
        <section className="text-white">
            <div className="container">
                <div className="rounded-3xl p-10 md:p-12 shadow-glow"
                     style={{ background: "linear-gradient(135deg, #2563eb, #a855f7 60%, #ec4899)" }}>
                    <h3 className="text-2xl md:text-3xl font-bold">Have an idea? Let’s build it.</h3>
                    <p className="mt-2 text-white/90 max-w-2xl">
                        From MVP to scale-up, we’ve got you — fast, secure, and stunning.
                    </p>
                    <a href="/contact"
                       className="btn mt-6 bg-white text-brand hover:bg-slate-100">
                        Start a project
                    </a>
                </div>
            </div>
        </section>
    );
}
