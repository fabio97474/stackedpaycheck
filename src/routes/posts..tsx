import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  component: PostPage,
})

function PostPage() {
  const { slug } = Route.useParams()
  const post = allPosts.find(p => p.slug === slug)
  if (!post) return <div className="max-w-3xl mx-auto px-4 py-20 text-center"><h1>Post not found</h1></div>
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map(c => (
              <span key={c} className="sans text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C' }}>{c}</span>
            ))}
          </div>
          <h1 className="sans font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#ffffff' }}>{post.title}</h1>
          <p className="sans text-sm" style={{ color: '#94a3b8' }}>{post.date}</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="mt-12 rounded-lg p-8 text-center" style={{ backgroundColor: '#0D1F3C' }}>
          <h3 className="sans font-bold text-xl mb-3" style={{ color: '#ffffff' }}>Ready to Take Control?</h3>
          <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Download our free Paycheck Escape Plan and start building your financial stability today.</p>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Free Guide →</a>
        </div>
      </div>
    </div>
  )
}
