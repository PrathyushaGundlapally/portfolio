import Image from 'next/image';
import AgentRouterDemo from '@/components/agent-router-demo';
import SectionHeading from '@/components/section-heading';
import {
  aboutHighlights,
  architectureFlow,
  capabilityCards,
  capabilityMap,
  contactLinks,
  deliveryHighlights,
  education,
  experience,
  focusAreas,
  heroMetrics,
  personalInfo,
  projects,
  quickLinks,
  skills,
  systemsBuilt,
} from '@/data/portfolio';

export default function HomePage() {
  return (
    <main className="pb-16">
      <section id="home" className="section pb-16 pt-10 sm:pt-14">
        <div className="shell">
          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                  Hi, I&apos;m Prathyusha
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <p className="text-sm text-slate-500">
                  AI Engineer building practical AI and data experiences
                </p>
              </div>

              <h1 className="headline max-w-4xl text-balance">{personalInfo.tagline}</h1>
              <p className="copy-muted mt-6 max-w-2xl">{personalInfo.summary}</p>
              <p className="copy-muted mt-4 max-w-2xl">{personalInfo.heroBlurb}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="subtle-link inline-flex items-center gap-1"
                  >
                    {item.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#systems" className="primary-button">
                  Explore my work
                </a>
                <a href={personalInfo.resumePath} className="secondary-button" download>
                  Download resume
                </a>
                <a href="#contact" className="text-link-button">
                  Contact me
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <div className="text-3xl font-semibold tracking-tight text-accent">{metric.value}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="section-card overflow-hidden p-4 sm:p-5">
                <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.75rem] border border-line bg-gradient-to-br from-mist to-white p-3">
                    <div className="overflow-hidden rounded-[1.35rem] border border-line bg-white">
                      <Image
                        src={personalInfo.profileImage}
                        alt={personalInfo.profileImageAlt}
                        width={720}
                        height={900}
                        className="h-[24rem] w-full object-cover object-[58%_18%] brightness-[1.08] sm:h-[28rem]"
                        priority
                      />
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-line bg-mist p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      What I work across
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {focusAreas.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>


                  </div>
                </div>
              </div>

              <div className="section-card p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                      Capability map
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      A simple view of where most of my work sits today.
                    </p>
                  </div>
                  <a href="#capability-map" className="subtle-link">
                    See details
                  </a>
                </div>

                <div className="mt-6 space-y-4">
                  {capabilityMap.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="font-medium text-slate-700">{item.label}</span>
                        <span className="font-semibold text-accent">{item.value}</span>
                      </div>
                      <div className="bar-track mt-2">
                        <div className="bar-fill" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-slate-200/70 bg-white/70 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="About"
            title="Early-career, but already working on real AI and data workflows"
            description="I am still early in my career, so this portfolio focuses on honest signal: the systems I have contributed to, the workstreams I have owned, and the way I think about AI application design in enterprise settings."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="section-card p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-ink">What I bring</h3>
              <div className="mt-6 space-y-4">
                {aboutHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-mist p-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                  <div key={item.school} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-ink">{item.degree}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.school}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-accent">{item.period}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {capabilityCards.map((card) => (
                <div key={card.title} className="interactive-surface p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Experience"
            title="A grounded progression from internship to full-time AI engineering"
            description="My experience is still compact, so I wanted this section to be clear and readable rather than inflated. It shows what I worked on, how my role grew, and where I contributed beyond coding alone."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-5">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="section-card p-6 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-slate-700">
                        {item.company} · {item.location}
                      </p>
                      <p className="mt-2 text-sm text-accent">{item.note}</p>
                    </div>
                    <span className="w-fit rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {item.period}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.focus.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="section-card p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">Delivery & collaboration</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A meaningful part of my role has been working with people around the system, not
                    just writing code inside it.
                  </p>
                </div>
                <a href="#contact" className="subtle-link">
                  Connect
                </a>
              </div>

              <div className="mt-6 space-y-4">
                {deliveryHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-mist p-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capability-map" className="section border-y border-slate-200/70 bg-white/75 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Visualization"
            title="A quick visual read on the kinds of work I do most"
            description="Instead of using vague percentage skill bars, this capability map shows the balance of my recent work across AI application building, data and analytics, cloud environments, and delivery support."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-card p-6 sm:p-8">
              <div className="space-y-6">
                {capabilityMap.map((item) => (
                  <div key={item.label}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-base font-semibold text-ink">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                      </div>
                      <span className="text-sm font-semibold text-accent">{item.value}/100</span>
                    </div>
                    <div className="bar-track mt-3 h-3">
                      <div className="bar-fill h-3 rounded-full" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Why this view exists
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Your first version felt too text-heavy, so this section gives a faster picture of how
                my work is distributed. It also keeps the page more honest: I&apos;m early-career, but I
                already work across several adjacent layers of AI product delivery.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-mist p-4">
                  <p className="text-sm font-semibold text-ink">Strongest overlap</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    AI applications and data platform work often show up together in my recent projects.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-mist p-4">
                  <p className="text-sm font-semibold text-ink">Most distinctive angle</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Working across structured and unstructured data paths instead of only one chatbot flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="section py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="AI Systems & Workstreams"
            title="Systems I&apos;ve built or significantly contributed to"
            description="I renamed this section to keep it more believable. These entries represent the AI workstreams where I had hands-on engineering contribution, not inflated ownership claims."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {systemsBuilt.map((system) => (
              <article key={system.name} className="interactive-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                      {system.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{system.name}</h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">{system.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {system.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 space-y-3">
                  {system.impact.map((point) => (
                    <div key={point} className="rounded-2xl border border-line bg-mist p-4 text-sm leading-7 text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-slate-200/70 bg-white/70 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Architecture"
            title={architectureFlow.title}
            description={architectureFlow.subtitle}
          />

          <div className="mt-10 section-card overflow-hidden p-6 sm:p-8">
            <div className="agent-grid rounded-[2rem] border border-line bg-mist/70 p-5 sm:p-8">
              <div className="mx-auto flex max-w-5xl flex-col items-center">
                <div className="architecture-node max-w-xs">User Query</div>
                <div className="architecture-line" />
                <div className="architecture-node max-w-sm">Orchestrator</div>

                <div className="mt-10 grid w-full gap-4 md:grid-cols-4">
                  {architectureFlow.branches.map((branch) => (
                    <div key={branch.label} className="architecture-branch">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                        {branch.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{branch.detail}</p>
                      <div className="mt-4 rounded-2xl border border-white/80 bg-white px-3 py-3 text-sm font-medium text-slate-700 shadow-sm">
                        {branch.tool}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="architecture-merge mt-8 w-full max-w-4xl" />
                <div className="architecture-node max-w-sm">Response grounded to the right source</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <AgentRouterDemo />
          </div>
        </div>
      </section>

      <section id="projects" className="section py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Projects"
            title="Selected builds across realtime apps, ML, analytics, and interaction design"
            description="This section stays compact, but it shows that my work extends beyond one product category."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article key={project.name} className="interactive-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{project.label}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                {project.repoUrl ? (
                  <div className="mt-6">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="subtle-link inline-flex items-center gap-1"
                    >
                      GitHub repo
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section border-y border-slate-200/70 bg-white/70 py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and platforms I use across AI applications and data work"
            description="I kept this section practical and stack-focused instead of using progress bars that often feel arbitrary."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="section-card p-7">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{group}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section py-16 sm:py-20">
        <div className="shell">
          <div className="section-card overflow-hidden p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="section-title mt-5">Let&apos;s connect</h2>
                <p className="copy-muted mt-4 max-w-2xl">
                  I&apos;m interested in AI engineering roles and projects where I can keep building
                  useful AI applications, document workflows, analytics integrations, and practical
                  data products.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="contact-card"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                      <p className="mt-2 break-all text-sm font-medium text-slate-700">{item.value}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-mist p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">Quick profile snapshot</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    <span className="font-semibold text-ink">Name:</span> {personalInfo.name}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Role:</span> {personalInfo.title}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Location:</span> {personalInfo.location}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Focus:</span> AI chatbot features,
                    routing logic, Databricks-based analytics, document Q&A, and applied ML work.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="primary-button">
                    GitHub
                  </a>
                  <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="secondary-button">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}