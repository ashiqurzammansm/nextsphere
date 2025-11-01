'use client';
import { useState } from 'react';

const roles = [
    { id: "fs-engineer", title: "Full-Stack Engineer", type: "Full-time", loc: "Remote" },
    { id: "product-designer", title: "Product Designer (UI/UX)", type: "Full-time", loc: "Remote" },
    { id: "pm", title: "Product Manager", type: "Contract", loc: "Remote" },
];

export default function CareersPage() {
    const [state, setState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

    async function apply(e: any) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        setState('submitting');
        const res = await fetch('/api/inquiries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.get('name'),
                email: form.get('email'),
                role: form.get('role'),
                category: 'Careers',
                message: form.get('message'),
            }),
        });

        setState(res.ok ? 'done' : 'error');
        if (res.ok) (e.target as HTMLFormElement).reset();
    }

    return (
        <section className="container">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Careers at NextSphere</h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Join our creative tech family. Build, learn, and grow with us!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Open Roles</h2>
                    <ul className="space-y-4">
                        {roles.map(r => (
                            <li key={r.id} className="border p-4 rounded-xl shadow-sm bg-white/30 backdrop-blur-md">
                                <h3 className="font-semibold">{r.title}</h3>
                                <p className="text-sm text-slate-600">{r.type} • {r.loc}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={apply} className="border p-6 rounded-2xl shadow-sm bg-white/40 backdrop-blur-md grid gap-3">
                    <h2 className="text-lg font-semibold">Apply Now</h2>
                    <input name="name" placeholder="Your name" required className="border rounded-xl p-3" />
                    <input name="email" type="email" placeholder="Your email" required className="border rounded-xl p-3" />
                    <select name="role" className="border rounded-xl p-3" defaultValue="">
                        <option value="" disabled>Select role</option>
                        {roles.map(r => <option key={r.id}>{r.title}</option>)}
                    </select>
                    <textarea name="message" placeholder="Why would you like to join us?" required className="border rounded-xl p-3" />
                    <button className="btn btn-primary" disabled={state === 'submitting'}>
                        {state === 'submitting' ? 'Submitting...' : 'Submit Application'}
                    </button>
                    {state === 'done' && <p className="text-green-600 text-sm">Application sent successfully!</p>}
                    {state === 'error' && <p className="text-red-600 text-sm">Something went wrong. Try again.</p>}
                </form>
            </div>
        </section>
    );
}
