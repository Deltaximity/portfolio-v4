import { notFound } from 'next/navigation';
import { getPostBySlug, getPostMetadata } from '@/lib/posts';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Sidebar from '@/components/Sidebar';

// Fix this inefficient code
function extractHeadings(markdown: string) {
    const regex = /^(#{1,6})\s+(.*)$/gm;
    const headings = [];

    let match;
    while ((match = regex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        headings.push({ id, text, level });
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
    return { title: post.metadata.title };
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
            <h1 className="h1">{post.metadata.title}</h1>
        </header>
        <article>
            <Sidebar headings={headings} />
            <div className="post-content" style={{ position: "relative" }}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                    h1: (props) => (<h2 className='h2' id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')} {...props} />),
                    h2: (props) => (<h3 className='h3' id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')} {...props} />),
                    h3: (props) => (<h4 className='h4' id={props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')} {...props} />),
                    code: (props) => (<code className='inline-code' {...props} />),
                    pre: (props) => (<pre className='code-block' {...props} />),
                    img: (props) => (
                        <span className='post-image'>
                        <Image
                            src={props.src || ''}
                            alt={props.alt || 'Markdown image'}
                            height={0}
                            width={0}
                            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            style={{ objectFit: "cover" }}
                        />
                        </span>
                    ),
                    }}
                >{post.content}</ReactMarkdown>
            </div>
        </article>
        </>
    );
}