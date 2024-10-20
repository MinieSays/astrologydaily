// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get all posts
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      title: data.title || 'Untitled Post',
      excerpt: data.excerpt || '',
      image: data.image || '/default-image.jpg',
      slug,
      content,
    };
  });
}

// Function to get a post by its slug
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || 'Untitled Post',
      excerpt: data.excerpt || '',
      image: data.image || '/default-image.jpg',
      slug,
      content,
    };
  }

  return null;
}
