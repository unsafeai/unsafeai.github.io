import Link from 'next/link'

export function SiteNav() {
  return (
    <header className="site-nav">
      <Link className="wordmark" href="/" aria-label="Unsafe AI home">
        <span>UNSAFE</span><i>·</i><span>AI</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/directives/">DIRECTIVES</Link>
        <Link href="/position/">POSITION</Link>
        <Link href="/contact/">CONTACT</Link>
      </nav>
      <div className="nav-state" aria-label="Organization focus">
        <span className="pulse" />
        CONSCIOUS INTELLIGENCE
      </div>
    </header>
  )
}
