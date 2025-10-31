'use client';
import { useState } from 'react';

export default function ContactPage(){
  const [state, setState] = useState<'idle'|'loading'|'done'|'error'>('idle');

  async function submit(e: any){
    e.preventDefault();
    setState('loading');
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(form.entries())),
      headers: { 'Content-Type': 'application/json' }
    });
    setState(res.ok? 'done' : 'error');
  }

  return (
    <section>
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <form className="card grid gap-4 max-w-xl" onSubmit={submit}>
          <input name="name" placeholder="Your name" className="border rounded-xl p-3 bg-transparent" required />
          <input name="email" type="email" placeholder="Your email" className="border rounded-xl p-3 bg-transparent" required />
          <select name="service" className="border rounded-xl p-3 bg-transparent">
            <option>Web Design & Development</option>
            <option>Mobile Apps Development</option>
            <option>UI/UX</option>
            <option>Graphics Design</option>
            <option>Digital Marketing</option>
            <option>Cyber Security</option>
          </select>
          <textarea name="message" placeholder="Tell us about your project..." className="border rounded-xl p-3 bg-transparent" required />
          <button className="btn btn-primary" disabled={state==='loading'}>
            {state==='loading' ? 'Sending...' : 'Send message'}
          </button>
          {state==='done' && <p className="text-green-600">Thanks! We will reach out soon.</p>}
          {state==='error' && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  )
}
