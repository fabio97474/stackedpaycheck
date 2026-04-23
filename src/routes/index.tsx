import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const features = [
  { icon: '💰', title: 'Budget That Works', desc: 'Simple, realistic budgeting frameworks designed around real paychecks — not theoretical income.' },
  { icon: '📈', title: 'Build Savings Fast', desc: 'Step-by-step savings strategies so you\'re ready for anything, without sacrificing your lifestyle.' },
  { icon: '🧱', title: 'Eliminate Debt', desc: 'Proven methods for paying off debt faster — from credit cards to student loans.' },
  { icon: '🌐', title: 'Invest Wisely', desc: 'Clear, jargon-free investing guides tailored to US, UK, Canadian, and Australian readers.' },
]

const testimonials = [
  { quote: 'I went from £200 overdraft every month to having a £3,000 emergency fund in under a year.', name: 'Sarah T.', location: 'Manchester, UK' },
  { quote: 'StackedPaycheck gave me a realistic plan. I paid off $8,000 in credit card debt in 14 months.', name: 'Marcus L.', location: 'Atlanta, US' },
  { quote: "Finally, personal finance advice that doesn't assume you make six figures. Game changer.", name: 'Priya R.', location: 'Toronto, Canada' },
]

function HomePage() {
  const recentPosts = allPosts.filter(p => p.published).slice(0, 3)
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }} className="relative overflow-hidden">
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="sans text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>Personal Finance for Real People</p>
          <h1 className="sans font-bold leading-tight mb-6" style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Stop Living <span style={{ color: '#C9A84C' }}>Paycheck</span> to <span style={{ color: '#C9A84C' }}>Paycheck</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#94a3b8' }}>
            Build your financial stability, layer by layer. Practical money strategies for working people across the US, UK, Canada, and Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">Get the Free Escape Plan →</a>
            <Link to="/blog" className="btn-secondary text-center">Read the Blog</Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#152d56' }} className="py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6 sm:gap-12">
          {['🇺🇸 US Readers', '🇬🇧 UK Readers', '🇨🇦 Canadian Readers', '🇦🇺 Australian Readers'].map(s => (
            <span key={s} className="sans text-sm font-medium" style={{ color: '#94a3b8' }}>{s}</span>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="sans font-bold text-2xl sm:text-3xl mb-3" style={{ color: '#0D1F3C' }}>Everything You Need to Take Control</h2>
          <p className="text-base sm:text-lg" style={{ color: '#64748b' }}>Honest, actionable content — no fluff, no get-rich-quick promises.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="rounded-lg p-6 text-center shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="sans font-semibold text-base mb-2" style={{ color: '#0D1F3C' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16" style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #152d56 100%)', borderTop: '4px solid #C9A84C' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="sans font-bold text-2xl sm:text-3xl mb-4" style={{ color: '#ffffff' }}>
            Download the Free <span style={{ color: '#C9A84C' }}>Paycheck Escape Plan</span>
          </h2>
          <p className="text-base sm:text-lg mb-8" style={{ color: '#94a3b8' }}>
            A step-by-step guide to building your first financial buffer and stopping the paycheck-to-paycheck cycle — for good.
          </p>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Yes, I Want the Free Guide →
          </a>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="sans font-bold text-2xl sm:text-3xl" style={{ color: '#0D1F3C' }}>Latest Articles</h2>
            <Link to="/blog" className="sans text-sm font-semibold" style={{ color: '#C9A84C', textDecoration: 'none' }}>View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <Link key={post._meta.path} to="/posts/$slug" params={{ slug: post.slug }} style={{ textDecoration: 'none' }}>
                <article className="rounded-lg overflow-hidden shadow-sm border h-full flex flex-col transition-shadow hover:shadow-md" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map(c => (
                        <span key={c} className="sans text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#f0e8d4', color: '#a8853a' }}>{c}</span>
                      ))}
                    </div>
                    <h3 className="sans font-bold text-base mb-2 leading-snug" style={{ color: '#0D1F3C' }}>{post.title}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#64748b' }}>{post.summary}</p>
                    <p className="sans text-xs mt-4" style={{ color: '#94a3b8' }}>{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f1efe9' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="sans font-bold text-2xl sm:text-3xl text-center mb-12" style={{ color: '#0D1F3C' }}>Real People, Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-lg p-6 shadow-sm" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #C9A84C' }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#334155' }}>"{t.quote}"</p>
                <p className="sans font-semibold text-sm" style={{ color: '#0D1F3C' }}>{t.name}</p>
                <p className="sans text-xs" style={{ color: '#94a3b8' }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
