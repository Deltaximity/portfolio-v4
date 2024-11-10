import Link from "next/link";

export default function BlogPage() {
    const blogPosts = [
        { slug: 'my-first-post', title: 'My First Post'},
        { slug: 'another-post', title: 'Another Post'},
        { slug: 'a-third-post', title: 'A Third Post'}
    ]
    
    return (
        <div>
            <section className="blogs-list">
                <h1 className="h1">All Blogs</h1>
            </section>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}