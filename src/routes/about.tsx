import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const values = [
  { title: 'Honesty Over Hype', desc: 'No get-rich-quick promises. Real strategies that require real effort — and real results.' },
  { title: 'Practical First', desc: 'Every piece of advice is built for people with real bills, real responsibilities, and real constraints.' },
  { title: 'Country-Aware', desc: 'Our content accounts for differences in tax systems, benefits, and financial products across the US, UK, Canada, and Australia.' },
  { title: 'Progress Over Perfection', desc: 'Small, consistent steps beat ambitious plans you never start. We celebrate every win, no matter how small.' },
]

function AboutPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="sans text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Our Story</p>
          <h1 className="sans font-bold text-3xl sm:text-4xl" style={{ color: '#ffffff' }}>Why StackedPaycheck Exists</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-lg p-8 sm:p-10 shadow-sm border mb-10" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
          <p className="sans font-bold text-xl mb-2" style={{ color: '#C9A84C' }}>"I was earning a decent salary and somehow still broke every month."</p>
          <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>— The feeling that started StackedPaycheck</p>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#334155' }}>
            <p>StackedPaycheck was born from frustration. The frustration of watching your bank account drain before the next pay cycle despite working hard, earning a reasonable income, and genuinely trying to do the right thing with money.</p>
            <p>Most personal finance advice is built for people who already have a financial cushion. That is not most people. Most people are managing tight margins, unexpected expenses, and the stress of feeling like they are always one emergency away from disaster.</p>
            <p>StackedPaycheck was created for the nurse in Birmingham working double shifts. For the marketing coordinator in Toronto juggling student loans. For the tradesperson in Perth trying to build something for their family.</p>
            <p style={{ fontWeight: 600, color: '#0D1F3C' }}>That is what we are here to help you do.</p>
          </div>
        </div>
        <h2 className="sans font-bold text-2xl mb-6" style={{ color: '#0D1F3C' }}>What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {values.map(v => (
            <div key={v.title} className="rounded-lg p-6 border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderLeft: '4px solid #C9A84C' }}>
              <h3 className="sans font-semibold text-base mb-2" style={{ color: '#0D1F3C' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#0D1F3C' }}>
          <h3 className="sans font-bold text-xl mb-3" style={{ color: '#ffffff' }}>Ready to Start Stacking?</h3>
          <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Download our free Paycheck Escape Plan — your first step to financial stability.</p>
          <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Free Guide →</a>
        </div>
      </section>
    </div>
  )
}
