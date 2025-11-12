// PATH: lib/db.ts
import mongoose from "mongoose";

// Read & sanitize the URI to avoid hidden chars / quotes / BOM issues
function getMongoUri() {
    let uri = process.env.MONGODB_URI || "";

    // Remove UTF-8 BOM if present, trim spaces, strip single/double quotes
    uri = uri.replace(/^\uFEFF/, "").trim().replace(/^['"]|['"]$/g, "");

    return uri;
}

const MONGODB_URI = getMongoUri();

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env.local");
}
if (!/^mongodb(\+srv)?:\/\//.test(MONGODB_URI)) {
    throw new Error(
        `❌ MONGODB_URI has invalid scheme. Got: ${JSON.stringify(
            MONGODB_URI.slice(0, 40)
        )}… (it must start with "mongodb://" or "mongodb+srv://")`
    );
}

// Reuse connection across HMR
type Cached = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
let cached: Cached = (global as any)._mongoose || { conn: null, promise: null };
(global as any)._mongoose = cached;

mongoose.set("strictQuery", true);

export async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                // db name is already in the URI (/nextsphere)
            })
            .then((m) => m);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

// Back-compat wrapper for routes importing dbConnect()
export async function dbConnect() {
    return connectDB();
}
