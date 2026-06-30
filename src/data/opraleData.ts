export interface MetricCard {
  id: string;
  code: string;
  label: string;
  value: string;
  subtext: string;
}

export const HERO_METRICS: MetricCard[] = [
  {
    id: "m1",
    code: "SYS.VELOCITY",
    value: "10x–20x",
    label: "Short-Form Output Multiplier",
    subtext: "Systematized weekly short-form clipping from existing long-form footage without creative degradation."
  },
  {
    id: "m2",
    code: "SYS.CONVERSION",
    value: "100% Owned",
    label: "Monetization Infrastructure",
    subtext: "Shifting audience attention from rented algorithmic feeds into owned email, SMS, and high-ticket funnels."
  },
  {
    id: "m3",
    code: "SYS.AGENCY",
    value: "White-Label",
    label: "Backend Scale Partner",
    subtext: "Seamless plug-and-play execution engine for talent management and creator agencies managing multi-roster portfolios."
  }
];

export const HEADLINE_OPTIONS = [
  "Scale creator output into owned revenue.",
  "A content and monetization system for creators and creator agencies.",
  "More content. Better positioning. Stronger monetization."
];

export const CORE_OFFERS = [
  {
    layer: "LAYER 01 / OUTPUT",
    title: "Clip Engine",
    subtitle: "Turn long-form footage into high-velocity, recurring short-form output.",
    description: "Built for creators sitting on hours of podcasts, streams, modules, or talking-head footage who lack the time or dedicated system to maintain daily cross-platform publishing.",
    capabilities: [
      "Weekly short-form clipping from existing long-form archives",
      "Platform-ready native pacing (Reels, TikTok, Shorts, X)",
      "Strict quality control: retention hooks, dynamic b-roll & clean typography",
      "Zero friction drop-off: asynchronous submission & predictable delivery SLA",
      "Built for consistency, velocity, and sustained creator output"
    ],
    code: "CE://OUTPUT_VELOCITY"
  },
  {
    layer: "LAYER 02 / MONETIZATION",
    title: "Content Operating System",
    subtitle: "Build the positioning, strategic funnels, and monetization layer behind the views.",
    description: "High viewership without conversion is an uncaptured asset. We engineer the exact scripts, hooks, CTA sequences, and product funnels required to monetize audience trust.",
    capabilities: [
      "Brand & authority positioning architecture",
      "Data-backed hook libraries and retention script frameworks",
      "Systematic CTA engineering (in-video verbal hooks & bio funnels)",
      "Automated lead capture & email/community conversion setup",
      "Brand launch sprints designed to monetize beyond brand deals"
    ],
    code: "COS://COMMERCE_ENGINE"
  }
];

export const TARGET_AUDIENCES = [
  {
    role: "Serious Creators",
    tagline: "Building resilient audience businesses",
    painPoint: "Trapped in the content hamster wheel, reliant on erratic algorithm payouts and one-off brand deal sponsorships.",
    opraleSolution: "Provides high-volume short-form extraction plus direct product/funnel integration so every post drives owned revenue."
  },
  {
    role: "Creator Agencies",
    tagline: "Managing multi-talent rosters at scale",
    painPoint: "Facing severe operational friction, inconsistent editing quality, and bottlenecked workflows when adding new creators.",
    opraleSolution: "Acts as a dedicated white-label backend scale partner with strict execution SLAs and reliable output delivery."
  },
  {
    role: "Executive Operators",
    tagline: "Demanding structured growth without chaos",
    painPoint: "Managing messy Slack channels, flaky freelance editors, and disjointed marketing assets across dozens of tools.",
    opraleSolution: "A unified, minimal operator workflow engineered for predictable cadence, clear reporting, and commercial clarity."
  }
];

export const WHY_OPRALE_WORKS = [
  {
    id: "01",
    title: "More short-form output from existing footage",
    description: "Repurpose hidden gold inside your podcasts, streams, and long-form video archives into a compounding library of daily short-form clips.",
    metric: "+350% Content Cadence"
  },
  {
    id: "02",
    title: "Better hooks, scripts, and positioning",
    description: "We don't just cut out silences. We restructure narrative flow with high-retention hooks and authority positioning tailored to your target ICP.",
    metric: "Sharper Authority"
  },
  {
    id: "03",
    title: "Stronger audience conversion",
    description: "Every asset is engineered with strategic micro-CTAs that route casual scrolling viewers into subscriber lists, Discord communities, and paid pipelines.",
    metric: "High-Intent Routing"
  },
  {
    id: "04",
    title: "Owned revenue pathways",
    description: "Stop relying exclusively on algorithmic ad share. Build digital products, paid memberships, and evergreen funnels fueled by daily organic impressions.",
    metric: "Independence"
  },
  {
    id: "05",
    title: "White-label support for agencies",
    description: "Onboard 5, 10, or 20 talent accounts simultaneously without hiring internal post-production managers or training unpredictable freelancers.",
    metric: "Roster Scalability"
  },
  {
    id: "06",
    title: "Zero operational chaos",
    description: "Eliminate the overhead of sourcing, vetting, briefing, and QAing individual editors. Plug into a refined operating system ready on day one.",
    metric: "Turnkey Execution"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    code: "PHASE_INPUT",
    name: "Input Footage & Context Setup",
    desc: "Connect your raw footage repositories (Google Drive, Frame.io, Dropbox) along with brand guidelines, ICP details, and monetization targets.",
    deliverables: ["Asset Repository Sync", "Brand Voice Calibration", "Monetization Goal Audit"]
  },
  {
    step: "02",
    code: "PHASE_EXTRACTION",
    name: "Clip Extraction & Content Planning",
    desc: "Our operators audit full-length recordings to isolate peak insight moments, mapping them against weekly publishing calendars.",
    deliverables: ["Curated Timecode Log", "Multi-Platform Calendar", "Editorial Briefing"]
  },
  {
    step: "03",
    code: "PHASE_REFINEMENT",
    name: "Hook & Script Refinement",
    desc: "We apply Swiss-inspired minimal typography, pacing optimization, visual pattern interrupts, and sharp retention hooks.",
    deliverables: ["Native Format Renderings", "Typography & B-Roll Integration", "Retention Pacing Audit"]
  },
  {
    step: "04",
    code: "PHASE_ALIGNMENT",
    name: "CTA & Funnel Alignment",
    desc: "We integrate systematic verbal and text CTAs designed to drive viewers directly to landing pages, opt-ins, or product launches.",
    deliverables: ["Conversion Hook Insertion", "Bio Link Optimization", "Lead Lead-Flow Testing"]
  },
  {
    step: "05",
    code: "PHASE_LAUNCH",
    name: "Launch Support & Monetization Layer",
    desc: "Continuous distribution tracking, funnel conversion optimization, and brand launch sprints to transform attention into recurring revenue.",
    deliverables: ["Weekly Output SLA", "Funnel Analytics Review", "Iterative Scale Protocol"]
  }
];

export const OFFER_TIERS = [
  {
    tier: "TIER 01",
    name: "Clip Engine",
    focus: "High-Velocity Short-Form Output",
    description: "For creators sitting on long-form footage who need systematic, high-retention short-form publishing at scale.",
    target: "Solo Creators & Podcasters",
    features: [
      "Up to 20 platform-ready short-form clips per month",
      "Extraction from existing podcasts, calls, or videos",
      "Modern Swiss typography & retention editing",
      "Dedicated asynchronous Slack communication channel",
      "Predictable 48-hour batch turnaround SLA",
      "Standard platform formatting (9:16 vertical)"
    ],
    highlight: false,
    badge: "STARTING LAYER"
  },
  {
    tier: "TIER 02",
    name: "Content Operating Growth",
    focus: "Output + Positioning + CTA Architecture",
    description: "For established creators who want more output while systematically routing audience attention into email lists and offers.",
    target: "Scaling Creators & Founders",
    features: [
      "Up to 40 platform-ready short-form clips per month",
      "Deep brand positioning & retention hook overhauls",
      "Custom CTA integration & audience conversion funnels",
      "Bi-weekly strategy call & editorial feedback loops",
      "Dedicated video operator & creative strategist",
      "Full cross-platform repurposing (IG, TikTok, Shorts, X)"
    ],
    highlight: true,
    badge: "RECOMMENDED SYSTEM"
  },
  {
    tier: "TIER 03",
    name: "Content Operating Scale",
    focus: "Full Monetization + Agency White-Label",
    description: "For creator agencies managing rosters or top-tier creators launching high-ticket funnels and digital product lines.",
    target: "Agencies & Enterprise Creators",
    features: [
      "Unlimited or multi-roster volume allocation",
      "Complete backend white-label execution for agencies",
      "Custom funnel architecture & launch sprint engineering",
      "Dedicated operations director & dedicated editing pod",
      "Real-time Slack/Teams portal & custom SLA terms",
      "Revenue attribution tracking & conversion reporting"
    ],
    highlight: false,
    badge: "WHITE-LABEL / ENTERPRISE"
  }
];

export const OUTCOME_STATEMENTS = [
  {
    code: "OUT.01",
    statement: "More output without content chaos",
    detail: "Systematize your creative pipeline so you never miss a daily upload."
  },
  {
    code: "OUT.02",
    statement: "Better positioning across every post",
    detail: "Command authoritative market leadership instead of generic entertainment."
  },
  {
    code: "OUT.03",
    statement: "Clearer conversion paths",
    detail: "Replace passive viewers with high-intent qualified leads."
  },
  {
    code: "OUT.04",
    statement: "Stronger monetization infrastructure",
    detail: "Construct evergreen digital offers and owned subscriber lists."
  },
  {
    code: "OUT.05",
    statement: "A more scalable creator business",
    detail: "Detach your personal time from day-to-day post-production operations."
  }
];