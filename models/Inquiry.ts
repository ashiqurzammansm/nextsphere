import mongoose, { Schema } from 'mongoose';
const InquirySchema = new Schema({
  name: String,
  email: String,
  message: String,
  service: String
},{ timestamps: true });
export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
