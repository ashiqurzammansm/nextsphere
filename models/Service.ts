// PATH: models/Service.ts
import mongoose, { Schema, InferSchemaType } from 'mongoose';

const ServiceSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        summary: { type: String, required: true },
        features: [{ type: String }],
        priceRange: { type: String },
    },
    { timestamps: true }
);

// Strong typing for the model
export type ServiceDoc = InferSchemaType<typeof ServiceSchema>;

export default
(mongoose.models.Service as mongoose.Model<ServiceDoc>) ||
mongoose.model<ServiceDoc>('Service', ServiceSchema);
