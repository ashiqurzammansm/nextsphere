// PATH: app/api/auth/login/route.ts
import { setAdminCookie } from '@/lib/auth';

export async function POST(req: Request){
    const { email, password } = await req.json();
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        setAdminCookie(email);
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    return new Response(JSON.stringify({ ok:false, error: 'Invalid credentials' }), { status: 401 });
}
