import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

function Header() {
  return (
    <header style={{ backgroundColor: '#0D1F3C', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="sans font-bold text-lg" style={{ color: '#C9A84C' }}>StackedPaycheck</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link to="/blog" className="sans text-sm font-medium" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
          <Link to="/about" className="sans text-sm font-medium" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</Link>
          <Link to="/start-here" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Start Here</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1F3C', borderTop: '4px solid #C9A84C' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div>
            <p className="sans font-bold text-lg mb-2" style={{ color: '#C9A84C' }}>StackedPaycheck</p>
            <p className="text-sm" style={{ color: '#94a3b8' }}>Build your financial stability, layer by layer.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/blog" className="sans text-sm" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <Link to="/about" className="sans text-sm" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</Link>
            <Link to="/start-here" className="sans text-sm" style={{ color: '#94a3b8', textDecoration: 'none' }}>Start Here</Link>
            <Link to="/contact" className="sans text-sm" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1e3a5f', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <p className="sans text-xs text-center" style={{ color: '#64748b' }}>
            © 2026 StackedPaycheck. Educational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
