import mongoose, { Schema } from 'mongoose';
const ServiceSchema = new Schema({
  title: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  features: [{ type: String }],
  priceRange: { type: String }
},{ timestamps: true });
export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
