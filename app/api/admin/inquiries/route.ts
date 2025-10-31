import { dbConnect } from '@/lib/db';
import Inquiry from '@/models/Inquiry';

export async function GET() {
  await dbConnect();
  const items = await Inquiry.find().sort({ createdAt: -1 }).limit(20).lean();
  return Response.json(items);
}
