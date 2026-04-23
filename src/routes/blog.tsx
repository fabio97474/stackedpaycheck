import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

const categories = ['Budgeting', 'Saving', 'Investing', 'Debt Freedom', 'Side Income']

function BlogPage() {
  const posts = allPosts.filter(p => p.published)
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="sans text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>The StackedPaycheck Blog</p>
          <h1 className="sans font-bold text-3xl sm:text-4xl" style={{ color: '#ffffff' }}>Articles to Build Your Financial Future</h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#94a3b8' }}>Practical money advice covering budgeting, saving, investing, and more.</p>
        </div>
      </section>
      <div className="border-b sticky top-16 z-40" style={{ backgroundColor: '#f9f8f5', borderColor: '#e2e8f0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex gap-3 overflow-x-auto">
          {categories.map(c => (
            <Link key={c} to="/category/$category" params={{ category: c }}
              className="sans text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
              style={{ backgroundColor: '#f0e8d4', color: '#a8853a', textDecoration: 'none' }}>
              {c}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        {posts.length === 0
          ? <p className="text-center" style={{ color: '#94a3b8' }}>No articles yet. Check back soon!</p>
          : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(post => (
                <Link key={post._meta.path} to="/posts/$slug" params={{ slug: post.slug }} style={{ textDecoration: 'none' }}>
                  <article className="rounded-lg overflow-hidden shadow-sm border flex flex-col h-full transition-shadow hover:shadow-md" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map(c => (
                          <span key={c} className="sans text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#f0e8d4', color: '#a8853a' }}>{c}</span>
                        ))}
                      </div>
                      <h2 className="sans font-bold text-lg mb-2 leading-snug" style={{ color: '#0D1F3C' }}>{post.title}</h2>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: '#64748b' }}>{post.summary}</p>
                      <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                        <span className="sans text-xs" style={{ color: '#94a3b8' }}>{post.date}</span>
                        <span className="sans text-xs font-semibold" style={{ color: '#C9A84C' }}>Read more →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
        }
      </div>
    </div>
  )
}
