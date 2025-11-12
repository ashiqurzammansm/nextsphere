// PATH: models/Inquiry.ts
import mongoose, { Schema, InferSchemaType } from "mongoose";

const InquirySchema = new Schema(
    {
        name: String,
        email: String,
        phone: String,
        category: String,  // General inquiry, Project quote, Support, Careers
        service: String,   // optional related service
        budget: String,
        timeline: String,
        role: String,      // for Careers
        message: String,
    },
    { timestamps: true }
);

type InquiryDoc = InferSchemaType<typeof InquirySchema>;

export default (mongoose.models.Inquiry as mongoose.Model<InquiryDoc>) ||
mongoose.model<InquiryDoc>("Inquiry", InquirySchema);
