import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchPosts, Post } from '../posts'

const categories = ['Budgeting', 'Saving', 'Investing', 'Debt Freedom', 'Side Income']

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts().then(p => { setPosts(p); setLoading(false) })
  }, [])

  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '0.75rem' }}>The StackedPaycheck Blog</p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#ffffff' }}>Articles to Build Your Financial Future</h1>
        </div>
      </section>
      <div style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f9f8f5', padding: '0.75rem 0' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '0.75rem', overflowX: 'auto' }}>
          {categories.map(c => (
            <span key={c} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, padding: '0.375rem 0.75rem', borderRadius: '9999px', backgroundColor: '#f0e8d4', color: '#a8853a', whiteSpace: 'nowrap' }}>{c}</span>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        {loading
          ? <p style={{ textAlign: 'center', color: '#94a3b8' }}>Loading articles...</p>
          : posts.length === 0
            ? <p style={{ textAlign: 'center', color: '#94a3b8' }}>No articles yet. Check back soon!</p>
            : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {posts.map(post => (
                  <Link key={post.slug} to={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', overflow: 'hidden', height: '100%' }}>
                      {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                      <div style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                          {post.categories.map(c => (
                            <span key={c} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, padding: '0.125rem 0.5rem', borderRadius: '0.25rem', backgroundColor: '#f0e8d4', color: '#a8853a' }}>{c}</span>
                          ))}
                        </div>
                        <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#0D1F3C', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</h2>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{post.summary}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', color: '#94a3b8' }}>{post.date}</span>
                          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#C9A84C' }}>Read more →</span>
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
