const included = [
  'The 3-layer financial buffer system',
  'A simple budget template that works on any income level',
  'The exact order to tackle debt, savings, and investing',
  'Common money traps that keep you stuck — and how to sidestep them',
  'A 30-day action plan to build your first financial layer',
]

export default function StartHere() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '0.75rem' }}>New Here? Start Here.</p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#ffffff', marginBottom: '1rem' }}>Your First Step to Financial Stability</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>One free guide. A clear path forward. No overwhelm.</p>
        </div>
      </section>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ border: '2px solid #C9A84C', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '3.5rem' }}>
          <div style={{ backgroundColor: '#C9A84C', padding: '1.5rem 2rem' }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0D1F3C', marginBottom: '0.25rem' }}>Free Download</p>
            <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.75rem', color: '#0D1F3C' }}>The Paycheck Escape Plan</h2>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
            <p style={{ color: '#334155', lineHeight: 1.7, marginBottom: '1.5rem' }}>If you are tired of running out of money before the month is over, this guide was written for you.</p>
            <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0D1F3C', marginBottom: '1rem' }}>What is Inside:</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {included.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', borderRadius: '9999px', backgroundColor: '#C9A84C', color: '#0D1F3C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Download the Free Guide Now →</a>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.75rem' }}>Free. No spam. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
