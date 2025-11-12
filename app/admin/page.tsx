// PATH: app/admin/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function AdminHome(){
    const [services, setServices] = useState<any[]>([]);
    const [inquiries, setInquiries] = useState<any[]>([]);

    useEffect(()=>{
        fetch('/api/services').then(r=>r.json()).then(setServices);
        fetch('/api/admin/inquiries').then(r=>r.json()).then(setInquiries);
    },[]);

    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card">
                        <h2 className="font-semibold mb-2">Services</h2>
                        <ul className="space-y-2 text-sm">
                            {services.map(s => <li key={s.slug} className="border rounded-xl p-3 dark:border-slate-700">{s.title}</li>)}
                        </ul>
                    </div>
                    <div className="card">
                        <h2 className="font-semibold mb-2">Recent Inquiries</h2>
                        <ul className="space-y-2 text-sm">
                            {inquiries.map((q:any)=>(
                                <li key={q._id} className="border rounded-xl p-3 dark:border-slate-700">
                                    <div className="font-medium">{q.name} • {q.email}</div>
                                    <div className="text-xs text-slate-500">{q.service}</div>
                                    <p className="mt-1">{q.message}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
