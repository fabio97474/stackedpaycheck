export default function Contact() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C9A84C', marginBottom: '0.75rem' }}>Get in Touch</p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#ffffff' }}>We would Love to Hear from You</h1>
        </div>
      </section>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href="mailto:fabiogenmarcon@gmail.com" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem', textDecoration: 'none', display: 'block' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✉️</div>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.25rem' }}>Email</p>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, color: '#C9A84C', marginBottom: '0.5rem' }}>fabiogenmarcon@gmail.com</p>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>We aim to respond within 2 business days.</p>
          </a>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem', textDecoration: 'none', display: 'block' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📖</div>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.25rem' }}>Free Resource</p>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, color: '#C9A84C', marginBottom: '0.5rem' }}>Paycheck Escape Plan</p>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Download our free guide to get started.</p>
          </a>
        </div>
        <div style={{ backgroundColor: '#f9f8f5', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.25rem', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>
          <strong style={{ color: '#0D1F3C' }}>Disclaimer:</strong> StackedPaycheck is an educational personal finance blog. Nothing published here constitutes professional financial, tax, or legal advice.
        </div>
      </div>
    </div>
  )
}
