import mongoose, { Document, Schema } from 'mongoose';
import { Post } from '../interfaces/PostInterface';

interface PostDocument extends Post, Document {}

const PostSchema = new Schema<PostDocument>({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

class PostModel {
  constructor(public model = mongoose.model('post', PostSchema)) {}

  async create(obj: any): Promise<Post> {
    const { originalname: name, size, filename: key } = obj;
    const result = await this.model.create({
      name,
      size,
      key,
      url: '',

    });
    return result;
  }

  async read(): Promise<Post[]> {
    const result = await this.model.find();
    return result;
  }

  async readOne(id: string): Promise<Post | null> {
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  async delete(id: string): Promise<Post | null> {
    const objRemoved = await this.model.findByIdAndDelete({ _id: id });
    return objRemoved;
  }
}

export default PostModel;
