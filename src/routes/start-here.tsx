import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/start-here')({
  component: StartHerePage,
})

const included = [
  'The 3-layer financial buffer system (used by people who stay stable even in emergencies)',
  'A simple budget template that works on any income level',
  'The exact order to tackle debt, savings, and investing',
  'Common money traps that keep you stuck — and how to sidestep them',
  'A 30-day action plan to build your first financial layer',
]

const steps = [
  { num: '01', title: 'Download the Free Guide', desc: 'Click the button below to access the Paycheck Escape Plan on Gumroad — completely free.' },
  { num: '02', title: 'Read It in One Sitting', desc: 'It is designed to be short, actionable, and immediately useful. No fluff.' },
  { num: '03', title: 'Pick Your First Action', desc: 'Every guide ends with a clear first next step — something you can do today.' },
  { num: '04', title: 'Keep Building', desc: 'Return to the blog for articles that match wherever you are in your financial journey.' },
]

function StartHerePage() {
  return (
    <div>
      <section style={{ backgroundColor: '#0D1F3C' }}>
        <div style={{ height: '4px', backgroundColor: '#C9A84C' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="sans text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>New Here? Start Here.</p>
          <h1 className="sans font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#ffffff' }}>Your First Step to Financial Stability</h1>
          <p className="text-base sm:text-lg" style={{ color: '#94a3b8' }}>One free guide. A clear path forward. No overwhelm.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-xl overflow-hidden shadow-lg mb-14" style={{ border: '2px solid #C9A84C' }}>
          <div className="px-8 py-6" style={{ backgroundColor: '#C9A84C' }}>
            <p className="sans font-bold text-xs uppercase tracking-widest mb-1" style={{ color: '#0D1F3C' }}>Free Download</p>
            <h2 className="sans font-bold text-2xl sm:text-3xl" style={{ color: '#0D1F3C' }}>The Paycheck Escape Plan</h2>
          </div>
          <div className="px-8 py-8" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#334155' }}>
              If you are tired of running out of money before the month is over, this guide was written for you. A concise, no-nonsense roadmap for breaking the paycheck-to-paycheck cycle — without requiring a high income or financial expertise.
            </p>
            <h3 className="sans font-bold text-base mb-4" style={{ color: '#0D1F3C' }}>What is Inside:</h3>
            <ul className="space-y-3 mb-8">
              {included.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A84C', color: '#0D1F3C' }}>✓</span>
                  <span className="text-sm leading-relaxed" style={{ color: '#334155' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">Download the Free Guide Now →</a>
              <p className="text-xs mt-3" style={{ color: '#94a3b8' }}>Free. No spam. No credit card required.</p>
            </div>
          </div>
        </div>
        <h2 className="sans font-bold text-2xl mb-8 text-center" style={{ color: '#0D1F3C' }}>How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {steps.map(s => (
            <div key={s.num} className="rounded-lg p-6 border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
              <div className="sans font-black text-3xl mb-3" style={{ color: '#f0e8d4' }}>{s.num}</div>
              <h3 className="sans font-bold text-base mb-2" style={{ color: '#0D1F3C' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
