import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils'
import { posts } from '../data/posts'
import { useEffect } from 'react'; // Import useEffect

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog | Ravat Agency';
  }, []);

  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-100 min-h-screen">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Banner */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-primary-700 sm:text-5xl"
          >
            Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-2xl font-semibold text-primary-500"
          >
            Latest Insights and Updates
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            Stay up to date with the latest trends, technologies, and best practices in software development.
          </motion.p>
        </div>
        {/* Blog Cards */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white/90 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition group overflow-hidden"
              >
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {formatDate(post.date)}
                    </time>
                    <Link
                      to={`/blog/${post.id}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-500 transition">
                      <Link to={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">{post.author.name}</p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
