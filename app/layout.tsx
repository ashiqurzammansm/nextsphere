import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
    metadataBase: new URL("https://nextsphere.app"),
    title: {
        default: "NextSphere Technologies — Code. Create. Inspire.",
        template: "%s | NextSphere Technologies",
    },
    description:
        "NextSphere Technologies: Web, Mobile, UI/UX, Graphics, Digital Marketing & Cyber Security.",
    openGraph: {
        type: "website",
        url: "https://nextsphere.app",
        title: "NextSphere Technologies — Code. Create. Inspire.",
        description: "We build web & mobile apps that inspire.",
        images: [{ url: "/og.png" }],
    },
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className="relative">
        {/* Ambient background (blue theme) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-hero-gradient" />
        <div
            aria-hidden
            className="pointer-events-none absolute -z-10 left-1/2 top-[-140px] h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(closest-side, rgba(37,99,235,0.55), transparent)" }}
        />

        {/* Fixed navbar */}
        <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-white/60 dark:bg-slate-950/40 supports-[backdrop-filter]:backdrop-blur">
            <div className="container h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" width={220} height={60} alt="NextSphere logo" priority />
                </Link>
                <nav className="hidden sm:flex items-center gap-4 text-sm">
                    <Link href="/services" className="inline-flex items-center h-10 px-2 hover:opacity-80">Services</Link>
                    <Link href="/projects" className="inline-flex items-center h-10 px-2 hover:opacity-80">Projects</Link>
                    <Link href="/about" className="inline-flex items-center h-10 px-2 hover:opacity-80">About</Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center h-10 px-5 rounded-3xl text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.25)] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.15),0_25px_60px_-20px_rgba(59,130,246,0.55)]"
                        style={{ background: "linear-gradient(135deg, #2563eb, #60a5fa)" }}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>

        {/* content below fixed header */}
        <main className="pt-20">{children}</main>

        {/* Polished footer */}
        <footer className="mt-20 border-t border-white/10">
            {/* Top line glow */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="container py-12 grid gap-10 md:grid-cols-4">
                {/* Brand */}
                <div className="space-y-3">
                    <Image src="/logo.svg" width={220} height={60} alt="NextSphere logo" />

                    <p className="text-sm text-slate-500 dark:text-slate-400">Code. Create. Inspire.</p>

                    {/* Socials */}
                    <div className="flex gap-3 pt-2">
                        <a className="footer-icon" aria-label="GitHub" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.76.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.85.12 3.15.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.95.43.38.81 1.12.81 2.26v3.35c0 .32.21.69.82.58A12 12 0 0 0 12 .5"/></svg>
                        </a>
                        <a className="footer-icon" aria-label="Twitter" href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.4 7.5c.01.2.01.39.01.59 0 6.02-4.58 12.96-12.96 12.96A12.88 12.88 0 0 1 2 19.7c.36.04.72.06 1.1.06a9.13 9.13 0 0 0 5.66-1.95 4.56 4.56 0 0 1-4.26-3.17c.28.04.56.06.86.06.41 0 .82-.05 1.2-.16A4.56 4.56 0 0 1 3.2 10v-.06c.76.42 1.62.67 2.54.7a4.55 4.55 0 0 1-2.03-3.78c0-.84.23-1.63.64-2.31a12.94 12.94 0 0 0 9.39 4.76 4.55 4.55 0 0 1 7.76-4.15 9.08 9.08 0 0 0 2.89-1.1 4.57 4.57 0 0 1-2 2.52 9.15 9.15 0 0 0 2.62-.72 9.78 9.78 0 0 1-2.19 2.26Z"/></svg>
                        </a>
                        <a className="footer-icon" aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.06V23h-4v-6.24c0-1.49-.03-3.41-2.08-3.41-2.08 0-2.4 1.62-2.4 3.3V23h-4V8.5Z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="footer-link" href="/about">About</Link></li>
                        <li><Link className="footer-link" href="/services">Services</Link></li>
                        <li><Link className="footer-link" href="/projects">Projects</Link></li>
                        <li><Link className="footer-link" href="/careers">Careers</Link></li>
                        <li><Link className="footer-link" href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Services quick list */}
                <div>
                    <h4 className="font-semibold mb-3">What we do</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="footer-link" href="/services/web-design-development">Web Design & Development</Link></li>
                        <li><Link className="footer-link" href="/services/mobile-apps-development">Mobile Apps</Link></li>
                        <li><Link className="footer-link" href="/services/ui-ux">UI/UX</Link></li>
                        <li><Link className="footer-link" href="/services/graphics-design">Graphics</Link></li>
                        <li><Link className="footer-link" href="/services/digital-marketing">Digital Marketing</Link></li>
                        <li><Link className="footer-link" href="/services/cyber-security">Cyber Security</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-3">Get in touch</h4>
                    <p className="text-sm">support@nextsphere.app</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Mon–Fri, 9am–6pm (GMT)</p>
                    <Link href="/contact" className="btn btn-primary mt-4 inline-flex">Start a project</Link>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container py-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} NextSphere Technologies</div>
                    <div className="flex items-center gap-4">
                        <a className="footer-link" href="#">Privacy</a>
                        <a className="footer-link" href="#">Terms</a>
                        <a className="footer-link" href="mailto:support@nextsphere.app">support@nextsphere.app</a>
                    </div>
                </div>
            </div>
        </footer>

        {/* Floating chat bubble */}
        <ChatBubble />
        </body>
        </html>
    );
}
