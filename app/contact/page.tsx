'use client';
import { useState, useMemo } from 'react';

const services = [
    "Web Design & Development",
    "Mobile Apps Development",
    "UI/UX",
    "Graphics Design",
    "Digital Marketing",
    "Cyber Security",
];

const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export default function ContactPage() {
    const [state, setState] = useState<'idle'|'loading'|'done'|'error'>('idle');
    const [message, setMessage] = useState('');
    const chars = message.length;
    const max = 800;
    const remaining = useMemo(() => Math.max(0, max - chars), [chars]);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState('loading');

        const form = new FormData(e.currentTarget);
        // honeypot – real humans leave this empty
        const botTrap = (form.get('company') as string) || '';

        const res = await fetch('/api/inquiries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.get('name'),
                email: form.get('email'),
                phone: form.get('phone') || '',
                category: form.get('category') || 'General inquiry',
                service: form.get('service') || '',
                budget: form.get('budget') || '',
                timeline: form.get('timeline') || '',
                message: form.get('message'),
                // honeypot
                company: botTrap,
            }),
        });

        setState(res.ok ? 'done' : 'error');
        if (res.ok) {
            (e.target as HTMLFormElement).reset();
            setMessage('');
        }
    }

    return (
        <section>
            <div className="container">
                <h1 className="text-4xl font-bold mb-6">Contact</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={submit} className="card grid gap-4">
                            {/* Honeypot (hidden field for bots) */}
                            <input
                                tabIndex={-1}
                                autoComplete="off"
                                name="company"
                                className="hidden"
                                aria-hidden="true"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    placeholder="Your name"
                                    className="border rounded-xl p-3 bg-transparent"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    className="border rounded-xl p-3 bg-transparent"
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <select
                                    name="category"
                                    defaultValue="General inquiry"
                                    className="border rounded-xl p-3 bg-transparent"
                                >
                                    <option>General inquiry</option>
                                    <option>Project quote</option>
                                    <option>Support</option>
                                    <option>Careers</option>
                                </select>

                                <select name="service" className="border rounded-xl p-3 bg-transparent">
                                    <option value="">— Select a service (optional) —</option>
                                    {services.map(s => <option key={s}>{s}</option>)}
                                </select>

                                <input
                                    name="phone"
                                    placeholder="Phone (optional)"
                                    className="border rounded-xl p-3 bg-transparent"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <select name="budget" className="border rounded-xl p-3 bg-transparent">
                                    <option value="">Budget (optional)</option>
                                    {budgets.map(b => <option key={b}>{b}</option>)}
                                </select>

                                <select name="timeline" className="border rounded-xl p-3 bg-transparent">
                                    <option value="">Timeline (optional)</option>
                                    <option>ASAP</option>
                                    <option>1–3 months</option>
                                    <option>3–6 months</option>
                                    <option>Flexible</option>
                                </select>
                            </div>

                            <div>
                <textarea
                    name="message"
                    placeholder="Tell us about your project… (goals, features, timeline)"
                    className="border rounded-xl p-3 bg-transparent w-full min-h-32"
                    maxLength={max}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                                <div className="mt-1 text-xs text-slate-500">{remaining} characters left</div>
                            </div>

                            <label className="inline-flex items-center gap-2 text-sm">
                                <input required type="checkbox" className="accent-blue-600" />
                                I agree to be contacted at the email/phone provided.
                            </label>

                            <button className="btn btn-primary" disabled={state==='loading'}>
                                {state==='loading' ? 'Sending…' : 'Send message'}
                            </button>
                            {state==='done' && <p className="text-green-600">Thanks! We’ll get back to you soon.</p>}
                            {state==='error' && <p className="text-red-600">Something went wrong. Try again.</p>}
                        </form>
                    </div>

                    {/* Right: helpful info panel */}
                    <aside className="card">
                        <h3 className="font-semibold text-lg">How to reach us</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                Typical reply time: within 24 hours
                            </li>
                            <li className="flex items-start gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8" stroke="currentColor" strokeWidth="1.5"/></svg>
                                Email: <a className="underline" href="mailto:support@nextsphere.app">support@nextsphere.app</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 3v4M17 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                Hours: Mon–Fri, 9am–6pm (GMT)
                            </li>
                        </ul>

                        <div className="hr" />

                        <h4 className="font-semibold">Project tips</h4>
                        <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                            <li>Share links to similar products you like</li>
                            <li>Tell us your deadline & success criteria</li>
                            <li>We can sign an NDA on request</li>
                        </ul>

                        <div className="hr" />
                        <a href="/careers" className="btn btn-ghost w-full">Looking for a job? Careers →</a>
                    </aside>
                </div>
            </div>
        </section>
    );
}
