import { ZodError } from 'zod';
import { Post, PostSchema } from '../interfaces/PostInterface';
import PostModel from '../models/PostModel';

export interface ServiceError {
    error: ZodError;
}

class PostService {
  constructor(public model = new PostModel()) {}

  public async read(): Promise<Post[]> {
    const items = await this.model.read();
    return items;
  }

  public async create(obj: any): Promise<Post | null | ServiceError> {
    /* const parsed = PostSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    } */

    const item = await this.model.create(obj);

    return item;
  }

  public async readOne(id: string): Promise<Post | null | ServiceError> {
    const item = await this.model.readOne(id);
    return item;
  }

  public async delete(id: string): Promise<Post | null | ServiceError> {
    const item = await this.model.delete(id);
    return item;
  }
}

export default PostService;
