import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
const TOKEN_NAME = 'ns_admin';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export function setAdminCookie(email: string) {
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
  cookies().set(TOKEN_NAME, token, { httpOnly: true, sameSite: 'lax', secure: true, path: '/' });
}

export function isAdmin() {
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) return false;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    return payload?.email === process.env.ADMIN_EMAIL;
  } catch {
    return false;
  }
}

export function clearAdmin() {
  cookies().set(TOKEN_NAME, '', { expires: new Date(0), path: '/' });
}
