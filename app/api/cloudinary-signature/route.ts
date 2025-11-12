// PATH: app/api/cloudinary-signature/route.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST() {
    const timestamp = Math.round(Date.now() / 1000);

    // Generate a signature valid for upload
    const signature = cloudinary.utils.api_sign_request(
        { timestamp, folder: "resumes" },
        process.env.CLOUDINARY_API_SECRET!
    );

    return Response.json({
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        timestamp,
        signature,
    });
}
