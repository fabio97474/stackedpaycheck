import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/category/$category')({
  component: CategoryPage,
})

function CategoryPage() {
  const { category } = Route.useParams()
  const posts = allPosts.filter(p => p.published && p.categories.includes(category))
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <Link to="/blog" className="sans text-sm mb-4 inline-block" style={{ color: '#94a3b8', textDecoration: 'none' }}>← All Articles</Link>
          <h1 className="sans font-bold text-3xl sm:text-4xl" style={{ color: '#ffffff' }}>{category}</h1>
          <p className="mt-2 text-sm" style={{ color: '#94a3b8' }}>{posts.length} article{posts.length !== 1 ? 's' : ''}</p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        {posts.length === 0
          ? <div className="text-center py-10">
              <p className="text-base mb-4" style={{ color: '#64748b' }}>No articles in this category yet.</p>
              <Link to="/blog" className="btn-primary">Browse All Articles</Link>
            </div>
          : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(post => (
                <Link key={post._meta.path} to="/posts/$slug" params={{ slug: post.slug }} style={{ textDecoration: 'none' }}>
                  <article className="rounded-lg overflow-hidden shadow-sm border flex flex-col h-full transition-shadow hover:shadow-md" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                    <div className="p-6 flex flex-col flex-1">
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
