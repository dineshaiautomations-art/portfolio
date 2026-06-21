// ──────────────────────────────────────────────────────────────────────────
// Site content. Edit copy, links, and project data here — components read
// from this file so you rarely need to touch JSX to update the site.
//
// ⚠ PLACEHOLDERS TO REPLACE BEFORE LAUNCH (search for "TODO"):
//   - social links (LinkedIn / GitHub / email)
//   - "Schedule a Call" booking link
//   - real client testimonials
// ──────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Dinesh",
  role: "AI Automation Engineer · n8n Specialist · Data Engineer",
  email: "dinesh.aiautomations@gmail.com", // TODO: replace with real email
  bookingUrl: "https://calendly.com/dinesh-aiautomations", // TODO: replace with real booking link
  social: {
    github: "https://github.com/dineshd", // TODO
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "AI Automation · n8n · Data Engineering",
  headline: "Automate Your Business. Scale Without Hiring.",
  subheadline:
    "I build AI-powered workflows, intelligent agents, and automation systems that eliminate repetitive work, qualify leads, integrate your tools, and save hundreds of hours every month.",
  badges: [
    "AI Automation",
    "n8n Expert",
    "Data Engineering",
    "Workflow Automation",
    "API Integrations",
  ],
  pipeline: ["Lead", "AI Agent", "CRM", "Notification", "Analytics"],
};

export const ABOUT = {
  title: "Building Intelligent Systems That Work While You Sleep",
  paragraphs: [
    "I'm a Data Engineer and AI Automation Specialist with 4+ years of experience designing scalable data solutions, automation workflows, and AI-powered business systems.",
    "I help businesses reduce manual work, increase operational efficiency, and create systems that scale without additional manpower.",
  ],
  expertise: [
    "AI Agents",
    "Workflow Automation",
    "Data Engineering",
    "API Integrations",
    "CRM Automation",
    "Lead Management Systems",
    "Reporting Automation",
    "ETL Pipelines",
  ],
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "20+", label: "Workflows shipped" },
    { value: "100s", label: "Hours saved monthly for clients" },
  ],
};

export type Service = {
  icon: "bot" | "workflow" | "plug" | "database";
  title: string;
  description: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "bot",
    title: "AI Automation Solutions",
    description:
      "Build AI-powered agents that handle customer interactions, qualify leads, answer questions, and automate business processes.",
    features: [
      "AI Agents",
      "Chatbots",
      "Customer Support Automation",
      "Lead Qualification",
    ],
  },
  {
    icon: "workflow",
    title: "n8n Workflow Automation",
    description:
      "Connect your business applications and automate repetitive workflows without manual intervention.",
    features: [
      "Workflow Design",
      "CRM Automation",
      "WhatsApp Automation",
      "Email Automation",
    ],
  },
  {
    icon: "plug",
    title: "API Integrations",
    description:
      "Connect multiple systems into one seamless business process.",
    features: [
      "REST APIs",
      "Third-Party Integrations",
      "Webhooks",
      "Data Synchronization",
    ],
  },
  {
    icon: "database",
    title: "Data Engineering & ETL",
    description: "Design and optimize data pipelines for analytics and reporting.",
    features: ["ETL Pipelines", "PySpark", "SQL", "Databricks"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  problem?: string;
  solution?: string[];
  workflow?: string;
  benefits?: string[];
  stack: string[];
  images: { src: string; alt: string; caption: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "real-estate-lead-assistant",
    title: "AI-Powered Real Estate Lead Qualification System",
    category: "AI Lead Assistant",
    problem: "Sales teams waste time manually qualifying leads.",
    solution: [
      "Captures leads from WhatsApp",
      "Understands buyer requirements",
      "Searches property inventory",
      "Shares brochures automatically",
      "Scores leads as HOT / WARM / COLD",
      "Creates CRM follow-up tasks",
    ],
    stack: ["n8n", "OpenAI", "Google Sheets", "Zoho CRM"],
    images: [
      {
        src: "/projects/project1-workflow.jpg",
        alt: "n8n workflow canvas for the Real Estate AI Lead Assistant System, showing chat intake, Zoho CRM sync, SLA reminders, and daily reporting branches",
        caption: "Full automation map — intake, CRM sync, SLA monitoring, and daily reporting",
      },
      {
        src: "/projects/project1-chat.jpg",
        alt: "Live chat conversation inside n8n showing the AI agent qualifying a real estate lead by budget and timeline",
        caption: "Live qualification chat — budget, timeline, and callback captured automatically",
      },
    ],
  },
  {
    slug: "lead-generation-automation",
    title: "Lead Generation Automation",
    category: "Cold Outreach System",
    workflow: "Apify Scrape → Filter & Categorize → Claude Drafts Email → Send → Log to Sheet → 24hr Follow-Up",
    benefits: [
      "Faster response times",
      "Improved lead quality",
      "Reduced manual effort",
    ],
    stack: ["n8n", "Apify", "Claude API", "Gmail", "Google Sheets"],
    images: [
      {
        src: "/projects/project2-workflow.jpg",
        alt: "n8n workflow canvas for a Fiverr cold email and follow-up lead generation system for a digital marketing freelancer",
        caption: "Cold email + 24-hour follow-up sequence with automatic lead logging",
      },
    ],
  },
  {
    slug: "gaming-hub-booking",
    title: "Gaming Hub Booking Automation",
    category: "WhatsApp Booking + Payments",
    workflow: "Webhook Intake → Validate Slot → Razorpay Payment Link → Confirm Booking → Log to Sheet",
    benefits: [
      "Zero manual slot management",
      "Instant payment collection",
      "No double-bookings",
    ],
    stack: ["n8n", "Razorpay", "Google Sheets", "WhatsApp"],
    images: [
      {
        src: "/projects/project3-workflow.jpg",
        alt: "n8n workflow canvas for a gaming cafe booking system with slot validation and Razorpay payment link generation",
        caption: "End-to-end booking flow — slot validation, payment link, confirmation",
      },
    ],
  },
];

export type TechCategory = {
  label: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  { label: "Automation", items: ["n8n", "OpenAI", "Gemini", "Claude"] },
  { label: "Programming", items: ["Python", "SQL", "PySpark"] },
  {
    label: "Data Engineering",
    items: ["Databricks", "Delta Lake", "ETL", "Data Pipelines"],
  },
  {
    label: "Cloud",
    items: ["GCP", "BigQuery", "Dataproc", "Dataflow", "Cloud Composer"],
  },
  {
    label: "Integrations",
    items: ["REST APIs", "Webhooks", "Zoho CRM", "Google Workspace"],
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Business-Focused Solutions",
    description:
      "Every workflow is built around a measurable business outcome, not technology for its own sake.",
  },
  {
    title: "Automation-First Approach",
    description:
      "If a task is repeatable, it shouldn't need a human. I design systems that run without supervision.",
  },
  {
    title: "Enterprise Data Engineering Experience",
    description:
      "Production-grade pipeline practices — applied to automation systems most freelancers can't build.",
  },
  {
    title: "Scalable & Maintainable Systems",
    description:
      "Clean, documented workflows that keep working as your data and team grow.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dinesh built us a WhatsApp lead qualification bot that cut our follow-up time by 60%. We went from manually texting 20+ leads a day to having qualified leads land directly in our CRM. Best investment we made this quarter.",
    name: "Rajesh Kumar",
    role: "Sales Director, Real Estate Agency (Chennai)",
  },
  {
    quote:
      "We were spending 8 hours a week on resume screening. His n8n workflow integrated Naukri with Claude to auto-score candidates and flag the top 10% — now we spend 30 minutes reviewing. The accuracy is scary good.",
    name: "Priya Sharma",
    role: "HR Manager, Recruitment Firm",
  },
  {
    quote:
      "The gaming cafe booking automation handles peak Friday-Saturday traffic without us lifting a finger. Payments go straight through, confirmations are instant, no more double-bookings. He made something complex look effortless.",
    name: "Vikram Patel",
    role: "Owner, Gaming Hub (Bangalore)",
  },
];

export const CONTACT = {
  headline: "Let's Build Something Smart",
  subheadline: "Ready to automate your business operations?",
};
