// PATH: components/Logos.tsx
export default function Logos() {
    return (
        <section className="py-12">
            <div className="container opacity-90">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="shimmer h-9 w-28 rounded-xl bg-white/60 dark:bg:white/10 border border-white/20 dark:border-white/10"
                            title="Client logo placeholder"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
