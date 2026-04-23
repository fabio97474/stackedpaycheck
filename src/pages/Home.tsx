import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchPosts, Post } from '../posts'

const features = [
  { icon: '💰', title: 'Budget That Works', desc: 'Simple, realistic budgeting frameworks designed around real paychecks.' },
  { icon: '📈', title: 'Build Savings Fast', desc: "Step-by-step savings strategies so you're ready for anything." },
  { icon: '🧱', title: 'Eliminate Debt', desc: 'Proven methods for paying off debt faster — from credit cards to student loans.' },
  { icon: '🌐', title: 'Invest Wisely', desc: 'Clear, jargon-free investing guides for US, UK, Canadian, and Australian readers.' },
]

const testimonials = [
  { quote: 'I went from £200 overdraft every month to having a £3,000 emergency fund in under a year.', name: 'Sarah T.', location: 'Manchester, UK' },
  { quote: 'StackedPaycheck gave me a realistic plan. I paid off $8,000 in credit card debt in 14 months.', name: 'Marcus L.', location: 'Atlanta, US' },
  { quote: "Finally, personal finance advice that doesn't assume you make six figures.", name: 'Priya R.', location: 'Toronto, Canada' },
]

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts().then(p => setPosts(p.slice(0, 3)))
  }, [])

  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '1rem' }}>Personal Finance for Real People</p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Stop Living <span style={{ color: '#C9A84C' }}>Paycheck</span> to <span style={{ color: '#C9A84C' }}>Paycheck</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '42rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Build your financial stability, layer by layer. Practical money strategies for working people across the US, UK, Canada, and Australia.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Free Escape Plan →</a>
            <Link to="/blog" className="btn-secondary">Read the Blog</Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#152d56', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {['🇺🇸 US Readers', '🇬🇧 UK Readers', '🇨🇦 Canadian Readers', '🇦🇺 Australian Readers'].map(s => (
            <span key={s} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8' }}>{s}</span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1152px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.875rem', color: '#0D1F3C', marginBottom: '0.75rem' }}>Everything You Need to Take Control</h2>
          <p style={{ color: '#64748b' }}>Honest, actionable content — no fluff, no get-rich-quick promises.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {features.map(f => (
            <div key={f.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#0D1F3C', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #152d56 100%)', borderTop: '4px solid #C9A84C', padding: '4rem 0' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.875rem', color: '#ffffff', marginBottom: '1rem' }}>
            Download the Free <span style={{ color: '#C9A84C' }}>Paycheck Escape Plan</span>
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>A step-by-step guide to building your first financial buffer and stopping the paycheck-to-paycheck cycle.</p>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Yes, I Want the Free Guide →</a>
        </div>
      </section>

      {posts.length > 0 && (
        <section style={{ maxWidth: '1152px', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.875rem', color: '#0D1F3C' }}>Latest Articles</h2>
            <Link to="/blog" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#C9A84C', textDecoration: 'none' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {posts.map(post => (
              <Link key={post.slug} to={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', overflow: 'hidden', height: '100%' }}>
                  {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />}
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      {post.categories.slice(0, 2).map(c => (
                        <span key={c} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, padding: '0.125rem 0.5rem', borderRadius: '0.25rem', backgroundColor: '#f0e8d4', color: '#a8853a' }}>{c}</span>
                      ))}
                    </div>
                    <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1F3C', marginBottom: '0.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{post.summary}</p>
                    <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', color: '#94a3b8', marginTop: '1rem' }}>{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section style={{ backgroundColor: '#f1efe9', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.875rem', textAlign: 'center', color: '#0D1F3C', marginBottom: '3rem' }}>Real People, Real Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #C9A84C', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>"{t.quote}"</p>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#0D1F3C' }}>{t.name}</p>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', color: '#94a3b8' }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
