import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="sans text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Get in Touch</p>
          <h1 className="sans font-bold text-3xl sm:text-4xl" style={{ color: '#ffffff' }}>We would Love to Hear from You</h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#94a3b8' }}>Questions, feedback, or just want to share your financial win? Reach out.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <a href="mailto:fabiogenmarcon@gmail.com" className="block rounded-lg p-6 border shadow-sm transition-shadow hover:shadow-md" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', textDecoration: 'none' }}>
            <div className="text-3xl mb-3">✉️</div>
            <p className="sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Email</p>
            <p className="sans font-bold text-base mb-2" style={{ color: '#C9A84C' }}>hello@stackedpaycheck.com</p>
            <p className="text-sm" style={{ color: '#64748b' }}>We aim to respond within 2 business days.</p>
          </a>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="block rounded-lg p-6 border shadow-sm transition-shadow hover:shadow-md" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', textDecoration: 'none' }}>
            <div className="text-3xl mb-3">📖</div>
            <p className="sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Free Resource</p>
            <p className="sans font-bold text-base mb-2" style={{ color: '#C9A84C' }}>Paycheck Escape Plan</p>
            <p className="text-sm" style={{ color: '#64748b' }}>Download our free guide to get started.</p>
          </a>
        </div>
        <div className="rounded-lg p-6 sm:p-8 border mb-10" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
          <h2 className="sans font-bold text-lg mb-4" style={{ color: '#0D1F3C' }}>Who We Write For</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ flag: '🇺🇸', country: 'United States' }, { flag: '🇬🇧', country: 'United Kingdom' }, { flag: '🇨🇦', country: 'Canada' }, { flag: '🇦🇺', country: 'Australia' }].map(c => (
              <div key={c.country} className="text-center rounded-lg p-3" style={{ backgroundColor: '#f9f8f5' }}>
                <div className="text-2xl mb-1">{c.flag}</div>
                <p className="sans text-xs font-medium" style={{ color: '#334155' }}>{c.country}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg p-5 border text-sm leading-relaxed" style={{ backgroundColor: '#f9f8f5', borderColor: '#e2e8f0', color: '#64748b' }}>
          <strong style={{ color: '#0D1F3C' }}>Disclaimer:</strong> StackedPaycheck is an educational personal finance blog. Nothing published here constitutes professional financial, tax, or legal advice.
        </div>
      </div>
    </div>
  )
}
