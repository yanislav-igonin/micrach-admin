import type { Post } from '@db';

interface WithStringDates {
  created_at: string
  updated_at: string | null;
};

export type PostWithStringDates = Post & WithStringDates;

export const mapDateToString = (posts: Post[]): PostWithStringDates[] => {
  return posts.map((post) => ({
    ...post,
    created_at: (new Date(post.created_at)).toString(),
    updated_at: post.updated_at ? (new Date(post.updated_at)).toString() : null,
  })) as PostWithStringDates[];
};
