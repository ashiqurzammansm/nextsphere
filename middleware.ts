import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const TOKEN_NAME = 'ns_admin';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if (!token) return NextResponse.redirect(new URL('/admin/login', req.url));
    try {
      const payload = jwt.verify(token, JWT_SECRET) as any;
      if (payload?.email === process.env.ADMIN_EMAIL) return NextResponse.next();
    } catch {}
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*']
};
