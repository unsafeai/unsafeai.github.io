import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="page-shell shell contact-page">
      <div className="page-kicker">[ DIRECTIVE 03 — COMMUNICATION PORT ]</div>
      <div className="contact-grid">
        <div>
          <h1 className="page-title">Make<br /><span>your case.</span></h1>
          <p className="page-deck">Technical conversations, collaboration, research proposals.</p>
        </div>
        <div className="contact-card">
          <div className="contact-card-row"><span>EMAIL</span><a href="mailto:contact@unsafeai.org">contact@unsafeai.org</a></div>
          <div className="contact-card-row"><span>GITHUB</span><a href="https://github.com/unsafeai" rel="noreferrer">github.com/unsafeai</a></div>
          <div className="contact-card-row"><span>STATUS</span><span>OPEN TO INQUIRIES</span></div>
        </div>
      </div>
      <Link className="text-link" href="/">RETURN TO ORGANIZATION <span>→</span></Link>
    </section>
  )
}
