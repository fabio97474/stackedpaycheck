const values = [
  { title: 'Honesty Over Hype', desc: 'No get-rich-quick promises. Real strategies that require real effort — and real results.' },
  { title: 'Practical First', desc: 'Every piece of advice is built for people with real bills, real responsibilities, and real constraints.' },
  { title: 'Country-Aware', desc: 'Our content accounts for differences in tax systems across the US, UK, Canada, and Australia.' },
  { title: 'Progress Over Perfection', desc: 'Small, consistent steps beat ambitious plans you never start.' },
]

export default function About() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '0.75rem' }}>Our Story</p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#ffffff' }}>Why StackedPaycheck Exists</h1>
        </div>
      </section>
      <section style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '2.5rem', marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#C9A84C', marginBottom: '0.5rem' }}>"I was earning a decent salary and somehow still broke every month."</p>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>— The feeling that started StackedPaycheck</p>
          <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1rem' }}>StackedPaycheck was born from frustration. The frustration of watching your bank account drain before the next pay cycle despite working hard and genuinely trying to do the right thing with money.</p>
          <p style={{ color: '#334155', lineHeight: 1.8 }}>We created this for the nurse in Birmingham, the coordinator in Toronto, the tradesperson in Perth. You build financial stability layer by layer — paycheck by paycheck.</p>
        </div>
        <h2 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#0D1F3C', marginBottom: '1.5rem' }}>What We Stand For</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {values.map(v => (
            <div key={v.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderLeft: '4px solid #C9A84C', borderRadius: '0.5rem', padding: '1.5rem' }}>
              <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#0D1F3C', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: '#0D1F3C', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>Ready to Start Stacking?</h3>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Free Guide →</a>
        </div>
      </section>
    </div>
  )
}
