import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { useEffect } from 'react'; // Import useEffect

export default function BlogPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ravat Agency Blog`;
    } else {
      document.title = 'Blog Post Not Found | Ravat Agency Blog';
    }
  }, [id, post]); // Re-run effect if id or post changes

  if (!post) return <div className="text-center py-20">Blog post not found.</div>

  return (
    <div className="max-w-7xl mx-auto py-16 pt-28 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Sidebar */}
      <aside className="hidden lg:block lg:col-span-2">
        <div className="sticky top-24 space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-800 mb-2 text-sm">About the Author</h3>
            <img src={post.author.imageUrl} alt={post.author.name} className="w-16 h-16 rounded-full mb-2" />
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-gray-500 text-xs">{post.author.role}</div>
          </div>
          {/* Add more widgets here if needed */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-1 lg:col-span-8">
        <Link to="/blog" className="text-primary-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 mb-6 lg:hidden">
          <img src={post.author.imageUrl} alt={post.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-gray-500 text-sm">{post.author.role} &middot; {post.date}</div>
          </div>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />

        {/* Other Blog Posts Section */}
        <div className="mt-16 border-t pt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Other Blog Posts</h2>
          <ul className="space-y-2">
            {posts
              .filter((p) => p.id !== post.id)
              .map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/blog/${p.id}`}
                    className="text-primary-700 hover:underline font-medium"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-2">
        <div className="sticky top-24 space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-800 mb-2 text-sm">Related Content</h3>
            <ul className="text-sm space-y-1">
              {posts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((p) => (
                  <li key={p.id}>
                    <Link to={`/blog/${p.id}`} className="text-primary-700 hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Add more widgets here if needed */}
        </div>
      </aside>
    </div>
  )
}
