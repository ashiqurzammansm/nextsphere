// PATH: app/api/inquiries/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();

        // Honeypot: if "company" is filled, silently treat as success
        if (typeof body.company === "string" && body.company.trim().length > 0) {
            return NextResponse.json({ ok: true });
        }

        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
        }

        const doc = await Inquiry.create({
            name: body.name,
            email: body.email,
            phone: body.phone || "",
            category: body.category || "General inquiry",
            service: body.service || "",
            budget: body.budget || "",
            timeline: body.timeline || "",
            role: body.role || "",
            message: body.message,
        });

        return NextResponse.json({ ok: true, id: doc._id });
    } catch (err: any) {
        console.error("POST /api/inquiries failed:", err?.message || err);
        return NextResponse.json(
            { ok: false, error: err?.message || "Failed to save inquiry" },
            { status: 500 }
        );
    }
}
