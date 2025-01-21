// lib/posts.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

interface PostMetadata {
  title: string;
  date: string;
  category?: string;
  description?: string;
  image?: string;
  alt?: string;
}

interface Post {
  metadata: PostMetadata;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'content');

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      metadata: data as PostMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error loading post: ${error}`);
    return null; // Return null if the file does not exist
  }
}

// Function to get metadata of all posts
export async function getPostMetadata(): Promise<({ slug: string } & PostMetadata)[]> {
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: filename.replace('.md', ''),
        ...data,
      } as { slug: string } & PostMetadata;
    })
  );

  return posts;
}