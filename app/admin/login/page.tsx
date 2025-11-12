// PATH: app/admin/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin(){
    const [error, setError] = useState('');
    const router = useRouter();
    async function onSubmit(e:any){
        e.preventDefault();
        setError('');
        const form = new FormData(e.currentTarget);
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: form.get('email'), password: form.get('password') })
        });
        if (res.ok) router.push('/admin');
        else setError('Invalid credentials');
    }
    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
                <form onSubmit={onSubmit} className="card max-w-md grid gap-4">
                    <input name="email" type="email" placeholder="Email" className="border rounded-xl p-3 bg-transparent" required />
                    <input name="password" type="password" placeholder="Password" className="border rounded-xl p-3 bg-transparent" required />
                    <button className="btn btn-primary">Login</button>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                </form>
            </div>
        </section>
    );
}
