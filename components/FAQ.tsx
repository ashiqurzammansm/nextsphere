'use client';
import { useState } from 'react';

const faqs = [
    { q: "How fast can we start?", a: "Usually within a week. We scope, plan, and kick off quickly." },
    { q: "Do you work with fixed price?", a: "Yes for defined scopes, otherwise time & materials with a cap." },
    { q: "Can you help after launch?", a: "Absolutely. We offer maintenance and growth sprints." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section>
            <div className="container">
                <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                <div className="grid gap-3">
                    {faqs.map((f, i) => (
                        <div key={f.q} className="card cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{f.q}</h3>
                                <span className="text-[#2563eb]">{open === i ? "−" : "+"}</span>
                            </div>
                            {open === i && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
