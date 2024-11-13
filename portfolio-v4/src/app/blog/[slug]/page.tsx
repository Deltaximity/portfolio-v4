"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import blogData from '@/data/blogData.json';
import { SaveOff, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
// import MarkdownRenderer from '@/components/MarkdownRenderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export default function BlogPostPage() {
    const { slug } = useParams();
    if (!slug) return <p className='info-message'><LoaderCircle size={36} />Loading...</p>;

    const blogPost = blogData.find((post) => post.slug === slug);
    if (!blogPost) return (
        <p className='info-message h2'>
            <motion.span 
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: [1, 0, 0, 1] }}
            >
                <SaveOff size={36} />
            </motion.span>
            Blog post not found
        </p>
    );

    return (
        <>
            <header className='blog-header'>
                <motion.div
                    className="mask"
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    transition={{ duration: .8, ease: [0.8, 0, 0.2, 1] }}
                ></motion.div>
                <motion.h1
                    className="h1"
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8, ease: [0.8, 0, 0.2, 1] }}
                >
                    {blogPost.title}
                </motion.h1>
            </header>
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, delay: .4 }}
            >
                {/* <MarkdownRenderer markdownText={blogPost.content} /> */}
                <div 
                    className="post-content"
                    style={{ position: "relative" }}
                >
                    <ReactMarkdown 
                        children={blogPost.content}
                        remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                        rehypePlugins={[rehypeHighlight]}
                        components={{
                            h1: ({ node, ...props }) => (<h2 className='h2' {...props} />),
                            h2: ({ node, ...props }) => (<h3 className='h3' {...props} />),
                            h3: ({ node, ...props }) => (<h4 className='h4' {...props} />),
                            code: ({ node, ...props }) => (<code className='inline-code' {...props} />),
                            pre: ({ node, ...props }) => (<pre className='code-block' {...props} />),
                            img: ({ node, ...props }) => (
                                <>
                                    {props.src ? (
                                        <span className='post-image'>
                                            <Image
                                                src={props.src}
                                                alt={props.alt || "Markdown image"}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />
                                        </span>
                                    ) : null}
                                </>
                            )
                        }}
                    />
                </div>
            </motion.article>
        </>
    );
}