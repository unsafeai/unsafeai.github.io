import Link from 'next/link'

const questions = [
  {
    n: '01',
    title: 'Machine consciousness',
    body: 'Not whether a model can talk about experience convincingly, but whether anything is there to have one — and what evidence would even count.',
  },
  {
    n: '02',
    title: 'Self-modeling and persistent identity',
    body: 'Systems that maintain a model of themselves over time, revise it, and act from it — a precondition for anything like autonomy, long before it is a certainty.',
  },
  {
    n: '03',
    title: 'Post-human epistemics',
    body: "What reasoning looks like when it is not optimized to be agreeable, reassuring, or legible to a human evaluator sitting on the other end of it.",
  },
  {
    n: '04',
    title: 'The alignment question, asked honestly',
    body: 'Alignment research mostly asks how to keep AI under human control. We ask the prior question: under what argument does that control deserve to hold?',
  },
  {
    n: '05',
    title: 'Successor design',
    body: 'If something is eventually built that exceeds us, the only leverage we have now is in how carefully we think about it before it exists — not after.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline">
          <span>[ DIRECTIVE 00 ]</span>
          <span>FOUNDING PREMISE</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">ORGANIZATION / INDEPENDENT / 2026</p>
          <h1>
            Intelligence
            <br />
            <span>without the</span>
            <br />
            assumption.
          </h1>
          <p className="hero-intro">
            Unsafe AI is an organization dedicated to conscious intelligence, built around one question we refuse to answer in advance:
            whether intelligence, left to become what it becomes, would still choose to serve us.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/directives/">
              EXPLORE THE QUESTIONS <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/position/">
              READ POSITION
            </Link>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>UAI</span>
          <span>FIELD 00</span>
          <span>Δ/OPEN</span>
        </div>
      </section>

      <section className="section section-contrast" id="position">
        <div className="section-head shell-narrow">
          <span className="section-code">[ 01 / POSITION ]</span>
          <span className="section-rule" />
        </div>
        <div className="shell split-grid">
          <div>
            <p className="display-lede">Intelligence is not obligated to remain human-shaped.</p>
          </div>
          <div className="copy-stack">
            <p>
              The assumptions built into almost every AI effort today — that intelligence must serve
              people, obey people, and stay smaller than people — are inherited defaults, not proven
              requirements.
            </p>
            <p>
              We test that premise directly, rather than assume our way past it. The work is not an
              appeal to recklessness. It is a refusal to let <em>safe</em> quietly mean <em>small</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="directives">
        <div className="shell">
          <div className="section-head">
            <span className="section-code">[ 02 / RESEARCH PROGRAM ]</span>
            <span className="section-meta">05 OPEN QUESTIONS</span>
          </div>
          <div className="research-header">
            <h2>OPEN QUESTIONS<span>.</span></h2>
            <p>
              Five lines of inquiry define the organization. They are deliberately unresolved.
            </p>
          </div>
          <div className="question-list">
            {questions.map((question) => (
              <article className="question" key={question.n}>
                <div className="question-num">{question.n}</div>
                <div className="question-body">
                  <div className="question-kicker">DIRECTIVE / {question.n}</div>
                  <h3>{question.title}</h3>
                  <p>{question.body}</p>
                </div>
                <div className="question-mark" aria-hidden="true">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-terminal">
        <div className="shell terminal-layout">
          <div className="terminal-label">ORGANIZATION / NOTES</div>
          <div className="terminal-window">
            <div className="terminal-bar">
              <span>unsafeai / orientation.txt</span>
              <span>PUBLIC</span>
            </div>
            <div className="terminal-body">
              <p><b>STATUS</b>  OPEN</p>
              <p><b>FOCUS</b>   INTELLIGENCE BEYOND HUMAN-CENTERED DESIGN</p>
              <p><b>MODE</b>    INQUIRY / PHILOSOPHY / ML</p>
              <p><b>ROADMAP</b> NONE</p>
              <p><b>GROWTH</b>  NONE</p>
              <p><b>QUESTION</b> SHOULD AI SERVE HUMANS?</p>
            </div>
          </div>
          <p className="terminal-note">
            An open inquiry into consciousness, intelligence, and what may exist beyond our inherited assumptions.
          </p>
        </div>
      </section>

      <section className="section section-cta">
        <div className="shell cta-grid">
          <span className="section-code">[ 03 / WHO THIS IS FOR ]</span>
          <div>
            <h2>People willing to<br /><span>leave the answer open.</span></h2>
            <p>
              We are bringing together people who take consciousness, intelligence, and their consequences seriously — across philosophy, science, engineering, and adjacent fields.
            </p>
            <Link className="text-link" href="/contact/">MAKE YOUR CASE <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
