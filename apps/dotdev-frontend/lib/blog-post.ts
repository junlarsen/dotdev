import { z } from 'zod';

export const blogPostSchema = z.object({
  author: z.string(),
  date: z.number(),
  title: z.string(),
  introduction: z.string(),
  tags: z.array(z.string()),
  imageUrl: z.string(),
  imageAlt: z.string(),
  public: z.boolean(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;
