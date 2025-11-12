// PATH: components/ChatBubble.tsx
'use client';

export default function ChatBubble() {
    return (
        <a
            href="/contact"
            aria-label="Open contact form"
            className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa] text-white shadow-xl ping-soft
                 w-14 h-14 flex items-center justify-center"
            title="Contact us"
        >
            {/* chat icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 10h8M8 14h5m-9 5l2.586-2.586A2 2 0 0 1 8.828 16H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11z" />
            </svg>
        </a>
    );
}
