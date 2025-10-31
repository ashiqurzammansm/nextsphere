import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import SEO from "@/components/SEO";
import ChatBubble from "@/components/ChatBubble";

export const metadata = {
    title: "NextSphere Technologies — Code. Create. Inspire.",
    description:
        "NextSphere Technologies: Web, Mobile, UI/UX, Graphics, Digital Marketing & Cyber Security.",
    metadataBase: new URL("https://nextsphere.app"),
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

        {/* Client SEO */}
        <SEO />

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-white/60 dark:bg-slate-950/40">
            <div className="container py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" width={140} height={40} alt="NextSphere logo" />
                </Link>
                <nav className="flex gap-6 text-sm">
                    <Link href="/services" className="hover:opacity-80">Services</Link>
                    <Link href="/projects" className="hover:opacity-80">Projects</Link>
                    <Link href="/about" className="hover:opacity-80">About</Link>
                    <Link href="/contact" className="btn btn-primary text-sm">Contact</Link>
                </nav>
            </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10">
            <div className="container py-12 grid gap-8 md:grid-cols-3">
                <div>
                    <Image src="/logo.svg" width={160} height={44} alt="NextSphere logo" />
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Code. Create. Inspire.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/projects" className="hover:underline">Projects</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <p className="text-sm">support@nextsphere.app</p>
                    <a href="/contact" className="btn btn-primary mt-4">Start a project</a>
                </div>
            </div>
            <div className="text-center text-xs text-slate-500 pb-8">
                © {new Date().getFullYear()} NextSphere Technologies
            </div>
        </footer>

        {/* Floating chat bubble */}
        <ChatBubble />
        </body>
        </html>
    );
}
