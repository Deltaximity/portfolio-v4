import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPage() {
    const blogPosts = [
        { slug: 'my-first-post', title: 'My First Post'},
        { slug: 'another-post', title: 'Another Post'},
        { slug: 'post-3', title: 'A Third Post'},
        { slug: 'post-4', title: 'A Third Post'},
        { slug: 'post-5', title: 'A Third Post'},
        { slug: 'post-6', title: 'A Third Post'},
        { slug: 'post-7', title: 'A Third Post'}
    ];

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: .2,
                staggerChildren: .1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    
    return (
        <div>
            <section className="blogs-list">
                <h1 className="h1">All Blogs</h1>
                <ul className="cards">
                    {blogPosts.map((post) => (
                        <li key={post.slug} className="card">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="image-container">
                                    <Image 
                                        src="/assets/img/DSC00402.jpg" 
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                                        style={{ objectFit: "cover" }}
                                        />
                                </div>
                                <div className="content">
                                    <span className="meta fineprint">Case Study, Project — 2024</span>
                                    <h2 className="h3">{post.title}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, delectus.</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}