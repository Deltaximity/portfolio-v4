import Link from "next/link"

export default function BlogPage() {
    const blogPosts = [
        { slug: 'my-first-post', title: 'My First Post'},
        { slug: 'another-post', title: 'Another Post'}
    ]
    
    return (
        <div>
            <h1>Hello, Blog Page!</h1>
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