import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#0D1F3C', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#C9A84C' }}>StackedPaycheck</span>
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/blog" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <Link to="/about" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8', textDecoration: 'none' }}>About</Link>
            <a href="https://profitstackio.gumroad.com/l/paycheck-escape-plan" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Free Guide</a>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: '#0D1F3C', borderTop: '4px solid #C9A84C' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#C9A84C', marginBottom: '0.5rem' }}>StackedPaycheck</p>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Build your financial stability, layer by layer.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[['Blog', '/blog'], ['About', '/about'], ['Start Here', '/start-here'], ['Contact', '/contact']].map(([label, path]) => (
                <Link key={path} to={path} style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1e3a5f', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', color: '#64748b' }}>© 2026 StackedPaycheck. Educational purposes only. Not financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
