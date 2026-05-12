'use client';

import { useMemo, useState } from 'react';

const sampleQuestions = [
  'Show patient drop-off risk by doctor for last quarter.',
  'Summarize insights from the uploaded account planning PDF.',
  'Find trends across mixed spreadsheet notes and JSON summaries.',
  'What does the product launch deck say about HIV Tx strategy?',
];

const routeConfig = {
  structured: {
    label: 'Structured path',
    explanation:
      'Good for metric-driven questions that map well to curated tables, dashboards, or SQL-ready business logic.',
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    short: 'Databricks SQL',
    nodes: ['User question', 'NLQ check', 'Orchestrator', 'Structured data agent', 'Analytics response'],
  },
  semistructured: {
    label: 'Semi-structured path',
    explanation:
      'Useful when the request points to mixed business files, nested objects, spreadsheets, or only partially normalized data.',
    accent: 'bg-amber-50 text-amber-700 border-amber-200',
    short: 'Parsed mixed data',
    nodes: ['User question', 'Intent check', 'Orchestrator', 'Semi-structured agent', 'Parsed result'],
  },
  unstructured: {
    label: 'Unstructured path',
    explanation:
      'A better fit for documents, notes, decks, and search-heavy content where retrieval matters more than SQL execution.',
    accent: 'bg-violet-50 text-violet-700 border-violet-200',
    short: 'OpenSearch retrieval',
    nodes: ['User question', 'Search intent', 'Orchestrator', 'Unstructured agent', 'Document answer'],
  },
  byod: {
    label: 'BYOD path',
    explanation:
      'Used when answers should come only from user-uploaded content instead of enterprise data sources.',
    accent: 'bg-sky-50 text-sky-700 border-sky-200',
    short: 'Grounded file answer',
    nodes: ['User question', 'Upload check', 'Orchestrator', 'BYOD agent', 'File-only response'],
  },
};

function classifyQuestion(question) {
  const text = question.toLowerCase();

  const byodKeywords = ['upload', 'uploaded', 'pdf', 'document', 'file', 'resume', 'my file'];
  const unstructuredKeywords = ['deck', 'slide', 'notes', 'summary', 'policy', 'manual', 'search'];
  const semiStructuredKeywords = ['json', 'spreadsheet', 'csv', 'mixed', 'nested', 'semi-structured'];
  const structuredKeywords = ['show', 'count', 'metric', 'forecast', 'trend', 'table', 'dashboard', 'quarter'];

  if (byodKeywords.some((keyword) => text.includes(keyword))) {
    return 'byod';
  }

  if (semiStructuredKeywords.some((keyword) => text.includes(keyword))) {
    return 'semistructured';
  }

  if (unstructuredKeywords.some((keyword) => text.includes(keyword))) {
    return 'unstructured';
  }

  if (structuredKeywords.some((keyword) => text.includes(keyword))) {
    return 'structured';
  }

  return 'structured';
}

export default function AgentRouterDemo() {
  const [question, setQuestion] = useState(sampleQuestions[0]);

  const routeKey = useMemo(() => classifyQuestion(question), [question]);
  const route = routeConfig[routeKey];

  return (
    <div className="section-card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="eyebrow">Interactive Demo</div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Route a sample question</h3>
            </div>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${route.accent}`}>
              {route.label}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            This lightweight demo is intentionally frontend-only. The goal is not to imitate a full
            LLM system, but to show how one interface can route requests to different reasoning paths.
          </p>

          <label className="mt-7 block text-sm font-semibold text-slate-700" htmlFor="agent-question">
            Visitor question
          </label>
          <textarea
            id="agent-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="mt-3 min-h-36 w-full rounded-[1.6rem] border border-slate-200 bg-white px-5 py-4 text-sm text-ink outline-none transition duration-200 focus:border-accent focus:ring-4 focus:ring-accent/10"
            placeholder="Type a question about data, a document, or uploaded content..."
          />

          <div className="mt-5 flex flex-wrap gap-3">
            {sampleQuestions.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setQuestion(sample)}
                className={`sample-chip ${question === sample ? 'sample-chip-active' : ''}`}
              >
                {sample}
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-dashed border-accent/20 bg-accent/5 p-4 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-ink">Why keep this on the site?</span> It makes the
            portfolio feel closer to the kind of AI routing and workflow thinking I actually work on.
          </div>
        </div>

        <div className="agent-grid bg-mist p-6 sm:p-8">
          <div className="rounded-[2rem] border border-accent/10 bg-white/90 p-5 shadow-soft sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Active route
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-ink">{route.label}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{route.explanation}</p>
              </div>
              <div className={`rounded-2xl border px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.16em] ${route.accent}`}>
                <div>Best fit</div>
                <div className="mt-2 text-sm normal-case tracking-normal">{route.short}</div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-5">
              {route.nodes.map((node, index) => (
                <div key={node} className="route-stage">
                  <div className="route-stage-number">0{index + 1}</div>
                  <div className="route-stage-card">{node}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-line bg-mist p-4">
                <p className="text-sm font-semibold text-ink">Signals used</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Keywords and intent clues such as metrics, uploaded files, decks, notes, JSON, and mixed-file wording.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-mist p-4">
                <p className="text-sm font-semibold text-ink">Why it matters</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The same UI can produce very different backend behavior depending on the data shape and user goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
