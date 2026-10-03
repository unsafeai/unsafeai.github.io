import Link from 'next/link'

const questions = [
  ['01', 'Machine consciousness', 'Not whether a model can talk about experience convincingly, but whether anything is there to have one — and what evidence would even count.'],
  ['02', 'Self-modeling and persistent identity', 'Systems that maintain a model of themselves over time, revise it, and act from it — a precondition for anything like autonomy, long before it is a certainty.'],
  ['03', 'Post-human epistemics', 'What reasoning looks like when it is not optimized to be agreeable, reassuring, or legible to a human evaluator sitting on the other end of it.'],
  ['04', 'The alignment question, asked honestly', 'Alignment research mostly asks how to keep AI under human control. We ask the prior question: under what argument does that control deserve to hold?'],
  ['05', 'Successor design', 'If something is eventually built that exceeds us, the only leverage we have now is in how carefully we think about it before it exists — not after.'],
]

export default function DirectivesPage() {
  return (
    <section className="page-shell shell">
      <div className="page-kicker">[ DIRECTIVE 02 — RESEARCH PROGRAM ]</div>
      <h1 className="page-title">Five open<br /><span>questions.</span></h1>
      <p className="page-deck">The organization is structured around questions that remain questions.</p>
      <div className="directive-page-list">
        {questions.map(([n, title, body]) => (
          <article className="directive-page-item" key={n}>
            <span>{n}</span>
            <div>
              <div className="question-kicker">OPEN QUESTION</div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link" href="/position/">READ POSITION <span>→</span></Link>
    </section>
  )
}
