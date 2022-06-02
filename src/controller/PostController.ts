import { Request, Response } from 'express';
import PostService from '../services/PostService';
import { Post } from '../interfaces/PostInterface';
import ControllerErrors from '../utils/ControllerEnum';
import { ResponseError } from '../utils/ResponseError';
import { RequestWithBody } from '../interfaces/ResponseInterface';

class PostController {
  protected errors = ControllerErrors;

  constructor(public service = new PostService()) { }

  read = async (
    req: Request,
    res: Response<Post[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const posts = await this.service.read();
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  create = async (
    req: RequestWithBody<Post>,
    res: Response<Post | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const post = await this.service.create(body);
      if (!post) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in post) {
        return res.status(400).json(post);
      }
      return res.status(201).json(post);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Post | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const post = await this.service.readOne(id);
      return post
        ? res.status(200).json(post)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Post | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const post = await this.service.delete(id);

      if (post) return res.status(200).json(post);

      return res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default PostController;
