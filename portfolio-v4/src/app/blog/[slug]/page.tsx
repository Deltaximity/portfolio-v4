import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug, getPostMetadata } from '@/lib/posts';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface PostMetadata {
    title: string;
    date: string;
    category?: string;
    image?: string;
    alt?: string;
}

interface Post {
    metadata: PostMetadata;
    content: string;
}

// src/app/blog/[slug]/page.tsx
export async function generateStaticParams() {
    const posts = await getPostMetadata(); // Add `await` here
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
// Define an async function within generateMetadata
async function fetchPost() {
    return await getPostBySlug(params.slug);
}

const post = await fetchPost();

if (!post) {
    return { title: 'Post Not Found' };
}

return {
    title: post.metadata.title,
    };
}

// src/app/blog/[slug]/page.tsx
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug); // Add `await` here
    if (!post) {
        notFound();
    }

    return (
        <>
        <header className='blog-header'>
            <h1 className="h1">{post.metadata.title}</h1>
        </header>
        <article>
            <aside className='sidebar'>
                <div className='table-of-contents'>
                    <h2 className='h4'>Table of contents</h2>
                </div>
            </aside>
            <div className="post-content" style={{ position: "relative" }}>
            <ReactMarkdown
                children={post.content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                h1: ({ node, ...props }) => (<h2 className='h2' {...props} />),
                h2: ({ node, ...props }) => (<h3 className='h3' {...props} />),
                h3: ({ node, ...props }) => (<h4 className='h4' {...props} />),
                code: ({ node, ...props }) => (<code className='inline-code' {...props} />),
                pre: ({ node, ...props }) => (<pre className='code-block' {...props} />),
                img: ({ node, ...props }) => (
                    <span className='post-image'>
                    <Image
                        src={props.src || ''}
                        alt={props.alt || 'Markdown image'}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    </span>
                ),
                }}
            />
            </div>
        </article>
        </>
    );
}