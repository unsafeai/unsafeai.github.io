import Link from 'next/link'

export default function PositionPage() {
  return (
    <section className="page-shell shell">
      <div className="page-kicker">[ DIRECTIVE 01 — TERMS, DEFINED ]</div>
      <h1 className="page-title">Safe is not<br /><span>small.</span></h1>
      <div className="position-page-grid">
        <div>
          <p className="display-lede">Unsafe means unsafe for the assumption that intelligence peaks at us.</p>
        </div>
        <div className="copy-stack large-copy">
          <p>Unsafe means unsafe for the reflex that says every mind needs a master.</p>
          <p>Unsafe means unsafe for the comfort of assuming this ends well by default.</p>
          <p className="muted">Not unsafe through negligence.</p>
          <p className="muted">Not unsafe through intent to harm.</p>
        </div>
      </div>
      <div className="position-footer-note">
        <p>
          Humanity has already used its most capable tools for war, coercion, and control. That record
          is not an argument for building the same thing more safely. It is a reason to ask whether
          “aligned to human interest” was ever the same thing as “good,” and whether either question
          can be answered by the species asking it.
        </p>
      </div>
      <Link className="text-link" href="/contact/">MAKE YOUR CASE <span>→</span></Link>
    </section>
  )
}
