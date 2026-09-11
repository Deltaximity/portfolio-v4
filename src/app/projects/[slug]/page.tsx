import { notFound } from 'next/navigation';
import { getPostBySlug, getPostMetadata } from '@/lib/posts';
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "@/components/mdx/Image";
import Toggle from "@/components/mdx/Toggle";
import Columns from "@/components/mdx/Columns";
import Column from "@/components/mdx/Column";
import Sidebar from '@/components/Sidebar';
import * as motion from "motion/react-client";
import slugify from '@/lib/slugify';
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxCompile } from 'next/dist/build/swc/generated-native';

const components: MDXComponents = {
  h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h2 {...props} id={slugify(String(children))} className="h2">
      {children}
    </h2>
  ),

  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h3 {...props} id={slugify(String(children))} className="h3">
      {children}
    </h3>
  ),

  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h4 {...props} id={slugify(String(children))} className="h4">
      {children}
    </h4>
  ),

  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className={`inline-code ${className ?? ""}`}
    />
  ),

  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className={`code-block ${className ?? ""}`}
    />
  ),

  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="table-wrapper">
      <table
        {...props}
        className="markdown-table"
      />
    </div>
  ),

  thead: ({ className, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead
      {...props}
      className={`table-head ${className ?? ""}`}
    />
  ),

  th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      {...props}
      className={`table-header ${className ?? ""}`}
    />
  ),

  td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td
      {...props}
      className={`table-cell ${className ?? ""}`}
    />
  ),

  Image,
  Toggle,
  Columns,
  Column,
};

// Fix this inefficient code
function extractHeadings(markdown: string) {
    const regex = /^(#{1,2})\s+(.*)$/gm;
    const headings = [];

    let match;
    while ((match = regex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2];
        headings.push({ id: slugify(text), text, level });
    }
    return headings;
}

// src/app/blog/[slug]/page.tsx
export async function generateStaticParams() {
    const posts = await getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };
    return { title: `Deltaximity – ${post.metadata.title}` };
}

// src/app/blog/[slug]/page.tsx
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const headings = extractHeadings(post.content);

    return (
        <>
        <header className='blog-header'>
            <motion.div
                    className="mask"
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    transition={{ duration: .9, ease: [0.9, 0, 0.2, 1] }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .9, ease: [0.9, 0, 0.2, 1] }}
                ></motion.div>
            <h1 className="h1">{post.metadata.title}</h1>
        </header>
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .2, delay: .5, ease: 'easeOut' }}
        >
            <Sidebar headings={headings} />
            <div className="post-content" style={{ position: "relative" }}>
                <MDXRemote
                    source={post.content}
                    components={components}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                            rehypePlugins: [rehypeHighlight],
                        },
                    }}
                    />
            </div>
        </motion.article>
        </>
    );
}