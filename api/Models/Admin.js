import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const AdminSchema = new Schema({
    Name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
    password: String
})

AdminSchema.plugin(timestamps);
AdminSchema.index({ createdAt: 1, updatedAt: 1 });

export const Admin = mongoose.model('Admin', AdminSchema);