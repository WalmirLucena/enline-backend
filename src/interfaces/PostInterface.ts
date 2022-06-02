import { z } from 'zod';

const PostSchema = z.object({
  name: z.string(),
  size: z.number(),
  key: z.string(),
  url: z.string(),
  createdAt: z.date(),
});

type Post = z.infer<typeof PostSchema>;

export { Post, PostSchema };
