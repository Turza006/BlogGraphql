import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const BlogSchema = new Schema({
    titel : String,
    Details : String,
    status: {
        type:String,
        default:"Active"
    }
})

BlogSchema.plugin(timestamps);
BlogSchema.index({ createdAt: 1, updatedAt: 1 });

export const Blog = mongoose.model('Blog', BlogSchema);