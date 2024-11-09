"use client"

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// mock data, in the future -> use API fetch
const blogPosts = [
    { slug: 'my-first-post', title: 'My First Post', content: 'This is the content of my first post.' },
    { slug: 'another-post', title: 'Another Post', content: 'Content for another post.' },
];

export default function BlogPostPage() {
    const { slug } = useParams();
    if (!slug) return <p>Loading...</p>;

    const blogPost = blogPosts.find((post) => post.slug === slug);
    if (!blogPost) return <p>Blog post not found</p>;

    return (
        <>
            <header className='blog-header'>
                <motion.div
                    className="mask"
                    initial={{ y: 0 }}
                    animate={{ y: '100%' }}
                    transition={{ duration: 1, ease: [0.8, 0, 0.2, 1] }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.8, 0, 0.2, 1] }}
                >
                    <h1 className='h1'>{blogPost.title}</h1>
                </motion.div>
            </header>
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, delay: .5 }}
            >
                <h2 className='h2'>First heading of the article</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt quam eaque natus et laboriosam, quidem unde amet nostrum vitae, voluptatum doloremque explicabo. Voluptatum, accusantium itaque assumenda consequuntur illo, incidunt labore sequi iure magnam mollitia repudiandae veniam sit eveniet, nemo aliquid consectetur hic fugiat placeat velit! Ratione assumenda doloremque non.</p>
            </motion.article>
        </>
    );
}