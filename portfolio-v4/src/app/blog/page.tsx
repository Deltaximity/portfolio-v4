import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";
import Image from "next/image";

interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image?: string;
    alt?: string;
}  

export default function BlogPage() {
    const posts = getPostMetadata();

    return (
        <div>
            <section className="blogs-list">
                <h1 className="h1">All Blogs</h1>
                <ul className="cards">
                    {posts.map((post) => (
                        <li key={post.slug} className="card">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="image-container">
                                    <Image 
                                        src={post.image || "/assets/img/DSC00402.jpg"}
                                        alt={post.alt || ""}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                                        style={{ objectFit: "cover" }}
                                        />
                                </div>
                                <div className="content">
                                    <span className="meta fineprint">{post.category} — {post.date}</span>
                                    <h2 className="h3">{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

function getPostMetadata(): PostMetadata[] {
    const postsDirectory = path.join(process.cwd(), 'src', 'data', 'content');
    const filenames = fs.readdirSync(postsDirectory);
  
    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace('.md', ''),
            ...data,
        } as PostMetadata;
    });
  
    return posts;
}