import { z } from 'zod';

const PostSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  size: z.number({
    required_error: 'size is required',
    invalid_type_error: 'size must be a number',
  }),
  key: z.string({
    required_error: 'key is required',
    invalid_type_error: 'key must be a string',
  }),
  url: z.string({
    required_error: 'url is required',
    invalid_type_error: 'url must be a string',
  }),
  createdAt: z.date({
    required_error: 'createdAt is required',
    invalid_type_error: 'createdAt must be a date',
  }),
});

type Post = z.infer<typeof PostSchema>;

export { Post, PostSchema };
