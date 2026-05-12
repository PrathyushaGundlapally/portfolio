export const personalInfo = {
  name: 'Prathyusha Gundlapally',
  title: 'AI Engineer',
  location: 'Hyderabad, Telangana, India',
  email: 'prathyushagundlapallypg@gmail.com',
  phone: '+91-9182547419',
  tagline: 'Welcome — I\'m Prathyusha, an AI Engineer.',
  summary:
    'AI Engineer with 1+ year of professional experience building enterprise chatbot features, document Q&A flows, Databricks-based analytics, and applied ML solutions. Promoted from intern to full-time after contributing across client-facing AI and data projects.',
  heroBlurb:
    'My work spans AI chatbot experiences, routing logic, structured and unstructured data access, cloud deployment, and stakeholder-facing delivery for enterprise use cases.',
  linkedIn: 'https://www.linkedin.com/in/prathyusha-gundlapally-a96a9b2bb/',
  github: 'https://github.com/PrathyushaGundlapally',
  resumePath: '/prathyusha-gundlapally-resume.pdf',
  profileImage: '/prathyusha-profile.jpeg',
  profileImageAlt: 'Portrait of Prathyusha Gundlapally',
};

export const quickLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prathyusha-gundlapally-a96a9b2bb/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/PrathyushaGundlapally',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=prathyushagundlapallypg%40gmail.com',
  },
];

export const heroMetrics = [
  {
    value: '1+',
    label: 'Years of professional AI engineering experience',
  },
  {
    value: '5',
    label: 'Business verticals supported in enterprise chatbot work',
  },
  {
    value: '4',
    label: 'Data modes worked across: structured, semi-structured, unstructured, BYOD',
  },
];

export const focusAreas = [
  'Enterprise chatbots',
  'Agent routing and orchestration',
  'Databricks analytics and MLflow',
  'AWS deployment and monitoring',
  'OpenSearch-backed retrieval',
  'Document Q&A workflows',
];

export const aboutHighlights = [
  'Promoted from internship to full-time after contributing to live enterprise AI projects.',
  'Worked across structured, semi-structured, unstructured, and uploaded document workflows.',
  'Comfortable moving between engineering implementation, analytics work, and client-facing communication.',
];

export const capabilityCards = [
  {
    title: 'AI application building',
    description:
      'Built and extended chatbot and agent flows that connect user questions with the right data source, retrieval path, or workflow step.',
  },
  {
    title: 'Databricks and data workflows',
    description:
      'Worked with SQL Warehouses, Unity Catalog, MLflow, Genie integrations, and analytics workflows that support enterprise decision-making.',
  },
  {
    title: 'Cloud and delivery mindset',
    description:
      'Worked within AWS, Docker, Kubernetes, and monitoring-heavy environments where systems must stay usable after launch.',
  },
];

export const capabilityMap = [
  {
    label: 'AI applications',
    value: 84,
    detail: 'chatbot features, question routing, document Q&A',
  },
  {
    label: 'Data and analytics',
    value: 80,
    detail: 'Databricks SQL, governed data access, ML workflows',
  },
  {
    label: 'Cloud and deployment',
    value: 72,
    detail: 'AWS, Docker, Kubernetes, monitoring, rollout support',
  },
  {
    label: 'Client delivery',
    value: 76,
    detail: 'presentations, ad hoc analysis, intern mentoring, coordination',
  },
];

export const experience = [
  {
    company: 'InfiGen AI',
    role: 'AI Engineer',
    period: 'July 2024 — Present',
    location: 'Hyderabad, Telangana, India',
    note: 'Promoted from internship to full-time',
    focus: ['AI chatbots', 'Databricks', 'AWS', 'Client delivery'],
    bullets: [
      'Contribute to enterprise AI systems for pharma and life sciences clients, with work spanning chatbot features, orchestration logic, analytics integration, and delivery support.',
      'Extended AI experiences connected to Databricks, OpenSearch, and cloud-hosted services rather than building only isolated demos.',
      'Delivered features and improvements across multiple active client-facing workstreams.',
    ],
  },
  {
    company: 'InfiGen AI',
    role: 'AI Engineer Intern',
    period: 'January 2024 — June 2024',
    location: 'Hyderabad, Telangana, India',
    note: 'Converted to full-time after internship',
    focus: ['Feature building', 'Cloud integration', 'Analytics support'],
    bullets: [
      'Started contributing to AI chatbot development, Databricks-based workflows, and cloud integrations during the internship.',
      'Took on enough implementation ownership to transition directly into a full-time engineering role.',
    ],
  },
];

export const deliveryHighlights = [
  'Led or supported client-facing meetings and technical walkthroughs for enterprise stakeholders.',
  'Mentored and managed an intern across active delivery work.',
  'Coordinated tasks and documentation using Jira and Confluence.',
  'Delivered ad hoc analyses and rapid prototypes alongside longer-running product work.',
];

export const systemsBuilt = [
  {
    name: 'Primary market research AI chatbot',
    subtitle: 'Unstructured enterprise research agent',
    stack: ['Python', 'Chainlit', 'AWS Bedrock', 'OpenSearch', 'Databricks SQL Warehouse', 'DuckDB'],
    summary:
      'Worked on an enterprise AI chatbot for primary market research use cases where the orchestrator routes questions to an unstructured-data path backed by OpenSearch and supporting analytics services.',
    impact: [
      'Supported enterprise Q&A across five therapeutic business verticals.',
      'Integrated AWS Bedrock models, OpenSearch-backed retrieval, and DuckDB-backed analytical behavior to return insights, tabular results, and multiple visualization types.',
      'Helped extend a deployed chatbot connected to Databricks and cloud-hosted application services.',
    ],
  },
  {
    name: 'Enterprise AI chatbot platform',
    subtitle: 'Multi-agent orchestration and routing',
    stack: ['React', 'FastAPI', 'LangGraph', 'Pydantic AI', 'OpenSearch'],
    summary:
      'Contributed to a modular AI chatbot platform where an orchestrator and chat manager route each question to the right specialized agent instead of forcing every request through one monolithic flow.',
    impact: [
      'Worked across orchestrator, chat manager, and specialized agent behaviors that return insights, tabular results, and visualizations.',
      'Helped separate structured, semi-structured, unstructured, and BYOD routes into clearer system paths.',
      'Shipped incremental capabilities while keeping the platform reliable for active client-facing work.',
    ],
  },
  {
    name: 'Semi-structured survey analytics agent',
    subtitle: 'Structured + preprocessed free-text survey analytics',
    stack: ['LangGraph', 'Pydantic AI', 'FastAPI', 'SQL', 'Survey preprocessing'],
    summary:
      'Built an agent for mixed survey data where structured columns are queried analytically and free-text responses are preprocessed, stored in tables, and analyzed alongside quantitative results.',
    impact: [
      'Handled both structured rollups and unstructured survey responses, returning insights, tabular results, and visualizations within the same workflow.',
      'Used distinct routing and skill logic for analytics-style questions versus free-text survey interpretation.',
      'Kept the semi-structured path table-centric rather than relying on OpenSearch as the primary store.',
    ],
  },
  {
    name: 'BYOD document Q&A agent',
    subtitle: 'Upload-first, file-bound grounded answers',
    stack: ['Frontend integration', 'FastAPI', 'Routing logic', 'Document grounding'],
    summary:
      'Built a bring-your-own-data document Q&A flow where users upload files and the agent answers only from that uploaded context.',
    impact: [
      'Routed requests to a file-bound path isolated from shared enterprise datasets.',
      'Enabled controlled, grounded answers with insights, tabular results, and visualizations for document review and self-serve analysis.',
      'Reflected a practical enterprise pattern for temporary, user-specific knowledge access.',
    ],
  },
  {
    name: 'Patient drop-off risk model',
    subtitle: 'Applied ML on Databricks',
    stack: ['Databricks', 'MLflow', 'Python', 'Predictive modeling'],
    summary:
      'Developed a doctor-level predictive ML workflow to estimate patient drop-off risk using behavioral and historical signals.',
    impact: [
      'Turned operational data into a decision-support signal for client teams.',
      'Connected analytics to actions taken before doctor visits.',
      'Showed end-to-end applied ML delivery in a client-facing environment.',
    ],
  },
];

export const architectureFlow = {
  title: 'How I think about orchestration',
  subtitle: 'A LangGraph-inspired view of routing the same user question to different system paths.',
  branches: [
    {
      label: 'Structured',
      detail: 'metrics, rollups, and SQL-ready questions',
      tool: 'Databricks SQL Warehouse',
    },
    {
      label: 'Semi-Structured',
      detail: 'survey tables with structured fields plus preprocessed free-text responses',
      tool: 'SQL + preprocessing workflow',
    },
    {
      label: 'Unstructured',
      detail: 'research documents, notes, and narrative content indexed for retrieval',
      tool: 'OpenSearch retrieval',
    },
    {
      label: 'BYOD',
      detail: 'uploaded files only, grounded to session-specific documents',
      tool: 'File-bound document path',
    },
  ],
};

export const projects = [
  {
    name: 'RedisChat',
    label: 'Realtime application',
    description:
      'Built a realtime chat application with React, Node.js, Express, Cloudinary, and Upstash Redis, reducing message delivery latency compared with polling-based approaches.',
    technologies: ['Redis', 'React', 'Node.js', 'Express', 'Cloudinary', 'Upstash'],
    repoUrl: 'https://github.com/PrathyushaGundlapally/redis-chat-app',
  },
  {
    name: 'Email Spam Classifier',
    label: 'Applied machine learning',
    description:
      'Developed an email classification pipeline with TF-IDF vectorization and NLP preprocessing, reaching up to 96.87% accuracy using classical ML models.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'TF-IDF'],
    repoUrl: 'https://github.com/PrathyushaGundlapally/Email-Classification--ML',
  },
  {
    name: 'Amazon Stock Analysis Dashboard',
    label: 'Data visualization',
    description:
      'Designed a Power BI dashboard for daily, monthly, quarterly, and annual stock analysis with interactive drill-downs and multiple chart types.',
    technologies: ['Power BI', 'Excel', 'Dashboarding'],
    repoUrl: 'https://github.com/PrathyushaGundlapally/Amazon-Data-Analysis-Project',
  },
  {
    name: 'Agent Routing Simulator',
    label: 'Interactive portfolio feature',
    description:
      'Built a frontend-only demo for this site that shows how one question can be routed to different AI workstreams without relying on external APIs.',
    technologies: ['Next.js', 'JavaScript', 'UI logic'],
    repoUrl: 'https://github.com/PrathyushaGundlapally/portfolio',
  },
];

export const skills = {
  'AI application stack': [
    'LangGraph',
    'LangChain',
    'Pydantic AI',
    'Mosaic AI Gateway',
    'AWS Bedrock',
    'Document Q&A workflows',
    'Agent routing logic',
  ],
  'Data and platform tooling': [
    'Databricks',
    'Unity Catalog',
    'SQL Warehouses',
    'Hive Metastore',
    'MLflow',
    'Serving Endpoints',
    'OpenSearch',
    'DuckDB',
  ],
  'Languages and frameworks': [
    'Python',
    'SQL',
    'JavaScript',
    'TypeScript',
    'FastAPI',
    'React',
    'Node.js',
    'Express',
    'Chainlit',
  ],
  'Cloud and delivery': [
    'AWS EC2',
    'S3',
    'DynamoDB',
    'CloudWatch',
    'Docker',
    'Kubernetes',
    'Helm',
    'Terraform',
    'Jira',
    'Confluence',
  ],
};

export const contactLinks = [
  {
    label: 'Email',
    value: 'prathyushagundlapallypg@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=prathyushagundlapallypg%40gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/prathyusha-gundlapally-a96a9b2bb',
    href: 'https://www.linkedin.com/in/prathyusha-gundlapally-a96a9b2bb/',
  },
  {
    label: 'GitHub',
    value: 'github.com/PrathyushaGundlapally',
    href: 'https://github.com/PrathyushaGundlapally',
  },
  {
    label: 'Phone',
    value: '+91-9182547419',
    href: 'tel:+919182547419',
  },
];

export const education = [
  {
    school: 'Rajiv Gandhi University of Knowledge and Technologies (IIIT Basar)',
    degree: 'B.Tech in Computer Science',
    detail: 'CGPA: 9.24 / 10.0',
    period: '2021 — 2025',
  },
  {
    school: 'Rajiv Gandhi University of Knowledge and Technologies',
    degree: 'Pre-University Course',
    detail: 'CGPA: 9.15 / 10.0',
    period: '2019 — 2021',
  },
];