import { useParams, Link } from 'react-router-dom'
import { posts } from '../posts'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}><h1>Post not found</h1><Link to="/blog">← Back to Blog</Link></div>
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {post.categories.map(c => (
              <span key={c} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, padding: '0.125rem 0.5rem', borderRadius: '0.25rem', backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C' }}>{c}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#ffffff', lineHeight: 1.2, marginBottom: '1rem' }}>{post.title}</h1>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', color: '#94a3b8' }}>{post.date}</p>
        </div>
      </section>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div style={{ marginTop: '3rem', backgroundColor: '#0D1F3C', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>Ready to Take Control?</h3>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Download our free Paycheck Escape Plan and start building your financial stability today.</p>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Free Guide →</a>
        </div>
      </div>
    </div>
  )
}
