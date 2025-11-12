// PATH: models/Project.ts
import mongoose, { Schema } from 'mongoose';
const ProjectSchema = new Schema({
    name: String,
    slug: { type: String, unique: true },
    description: String,
    tech: [String],
    image: String,
    url: String
},{ timestamps: true });
export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
