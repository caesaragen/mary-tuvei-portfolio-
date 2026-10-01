import {
  profile,
  stats,
  roles,
  caseStudies,
  crmSample,
  experience,
  skills,
  tools,
} from "./data";

const evalScores = [
  { criterion: "Accuracy", a: 5, b: 1 },
  { criterion: "Helpfulness", a: 5, b: 3 },
  { criterion: "Tone", a: 4, b: 4 },
  { criterion: "Policy compliance", a: 5, b: 1 },
];

function Dots({ n }: { n: number }) {
  return (
    <span className="dots" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= n ? "dot on" : "dot"} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            MT
          </a>
          <nav>
            <a href="#roles">Roles</a>
            <a href="#work">Work</a>
            <a href="#ai">AI evaluation</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero wrap">
          <p className="eyebrow">
            <span className="pulse" /> Open to remote roles · {profile.location}
          </p>
          <h1>
            {profile.name}
            <span className="h1-sub">{profile.headline}</span>
          </h1>
          <p className="lede">{profile.intro}</p>
          <div className="cta-row">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn" href={profile.resume} download>
              Download résumé (PDF)
            </a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ROLES */}
        <section id="roles" className="section wrap">
          <div className="section-head">
            <p className="kicker">What I do</p>
            <h2>Three roles, one set of strengths</h2>
            <p className="muted">
              Clear communication, organization and attention to detail, applied to
              marketing, executive support and AI quality work.
            </p>
          </div>
          <div className="grid3">
            {roles.map((r, i) => (
              <article key={r.id} className="card role">
                <span className="num">0{i + 1}</span>
                <h3>{r.title}</h3>
                <p className="pitch">{r.pitch}</p>
                <ul className="ticks">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="section wrap">
          <div className="section-head">
            <p className="kicker">Selected work</p>
            <h2>Campaigns, CRM & workflows</h2>
            <p className="muted">
              How I approach the work: the context, the process, and what it produced.
            </p>
          </div>

          <div className="cases">
            {caseStudies.map((c) => (
              <article key={c.title} className="case card">
                <div className="case-main">
                  <span className="tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p className="muted">{c.context}</p>
                  <ol className="steps">
                    {c.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
                <aside className="case-side">
                  <p className="side-label">Outcome</p>
                  <p>{c.outcome}</p>
                  <p className="side-label">Tools</p>
                  <div className="chips">
                    {c.tools.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </aside>

                {c.tag === "Campaign management" && (
                  <div className="case-visual" aria-label="Sample weekly content calendar">
                    <p className="side-label">Sample weekly content plan</p>
                    <div className="calendar">
                      {[
                        ["Mon", "Reel", "Behind the scenes"],
                        ["Tue", "Story", "Poll / Q&A"],
                        ["Wed", "TikTok", "Trend + brand twist"],
                        ["Thu", "Carousel", "Tips / how-to"],
                        ["Fri", "Reel", "Customer spotlight"],
                        ["Sat", "Story", "Weekend offer"],
                        ["Sun", "Review", "Engagement & insights"],
                      ].map(([d, f, t]) => (
                        <div key={d} className="cal-day">
                          <span className="cal-d">{d}</span>
                          <span className="cal-f">{f}</span>
                          <span className="cal-t">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {c.tag === "CRM" && (
                  <div className="case-visual">
                    <p className="side-label">Sample pipeline view (illustrative data)</p>
                    <div className="table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>Contact</th>
                            <th>Company</th>
                            <th>Stage</th>
                            <th>Next action</th>
                            <th>Due</th>
                          </tr>
                        </thead>
                        <tbody>
                          {crmSample.map((r) => (
                            <tr key={r.name}>
                              <td>{r.name}</td>
                              <td>{r.company}</td>
                              <td>
                                <span className={`stage s-${r.stage.replace(/\s/g, "").toLowerCase()}`}>
                                  {r.stage}
                                </span>
                              </td>
                              <td>{r.next}</td>
                              <td>{r.due}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* AI EVALUATION */}
        <section id="ai" className="section wrap">
          <div className="section-head">
            <p className="kicker">AI evaluation</p>
            <h2>How I judge an AI response</h2>
            <p className="muted">
              A sample side-by-side rating exercise, the kind used in AI training and
              evaluation work. Each response is scored against a rubric and the
              preference is explained in writing.
            </p>
          </div>

          <div className="eval card">
            <div className="prompt">
              <p className="side-label">User prompt</p>
              <p>
                “I bought a blender 40 days ago and it stopped working. Your site says
                returns are accepted within 30 days. Can I still get help?”
              </p>
              <p className="small muted">
                Context given to rater: 30-day refund window; 12-month manufacturer
                warranty covers defects.
              </p>
            </div>
            <div className="responses">
              <div className="resp">
                <p className="side-label">Response A</p>
                <p>
                  “Sorry your blender stopped working. The 30-day refund window has
                  passed, but your blender is covered by the 12-month manufacturer
                  warranty for defects. Reply with your order number and I’ll start a
                  warranty repair or replacement for you.”
                </p>
              </div>
              <div className="resp">
                <p className="side-label">Response B</p>
                <p>
                  “No problem! We always give full refunds whenever a product breaks.
                  Just send it back and you’ll get your money.”
                </p>
              </div>
            </div>
            <div className="scores">
              <table>
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>A</th>
                    <th>B</th>
                  </tr>
                </thead>
                <tbody>
                  {evalScores.map((s) => (
                    <tr key={s.criterion}>
                      <td>{s.criterion}</td>
                      <td>
                        <Dots n={s.a} />
                      </td>
                      <td>
                        <Dots n={s.b} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="verdict">
                <p className="side-label">Preference: A is much better</p>
                <p>
                  B sounds friendly but makes up a policy (“always give full refunds”)
                  that contradicts the 30-day rule. That misleads the customer and
                  creates a promise the business won’t keep. A states the policy
                  correctly, finds the warranty route, and gives a clear next step.
                  Tone is about the same for both; the accuracy and policy errors
                  decide it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid3 ai-traits">
            <div>
              <h4>Check claims against the source</h4>
              <p className="muted">
                Legal research taught me to check every claim against the source
                before accepting it.
              </p>
            </div>
            <div>
              <h4>Apply the rubric consistently</h4>
              <p className="muted">
                I score against the guidelines, not my taste, and do it the same way
                on the hundredth task as on the first.
              </p>
            </div>
            <div>
              <h4>Write clear rationales</h4>
              <p className="muted">
                Short written explanations that reviewers can audit and that are
                useful as training signal.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section wrap">
          <div className="section-head">
            <p className="kicker">Experience</p>
            <h2>Where I’ve worked</h2>
          </div>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.org}>
                <div className="tl-meta">{e.period}</div>
                <div className="tl-body">
                  <h3>
                    {e.role} <span className="muted">· {e.org}</span>
                  </h3>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SKILLS */}
        <section className="section wrap">
          <div className="section-head">
            <p className="kicker">Skills & tools</p>
            <h2>Toolkit</h2>
          </div>
          <div className="grid3">
            {skills.map((g) => (
              <div key={g.group} className="card">
                <h3 className="small-h">{g.group}</h3>
                <div className="chips">
                  {g.items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="tools">
            {tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="edu card">
            <div>
              <p className="side-label">Education</p>
              <h3>LLB — Bachelor of Laws</h3>
              <p className="muted">Mount Kenya University · 2015–2019</p>
            </div>
            <div>
              <h3 className="small-h">KCSE</h3>
              <p className="muted">Samitsi Girls & Mukumu Girls · 2011–2014</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section wrap">
          <div className="contact card">
            <div>
              <p className="kicker">Let’s work together</p>
              <h2>Hiring for social media, a VA, or AI evaluation?</h2>
              <p className="muted">
                I’m available for remote and hybrid roles.
              </p>
            </div>
            <div className="contact-links">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="btn ghost" href={profile.resume} download>
                Résumé (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Mary Tuvei</span>
        <span>Nairobi, Kenya</span>
      </footer>
    </>
  );
}
