export const profile = {
  name: "Mary Tuvei",
  headline: "Digital Marketing, Virtual Assistance & AI Evaluation",
  location: "Nairobi, Kenya (EAT, UTC+3)",
  email: "shakotuvei.67@gmail.com",
  phone: "+254 721 936 727",
  linkedin: "https://www.linkedin.com/in/mary-tuvei-704a172b3",
  resume: "/Mary_Tuvei_Resume.pdf",
  intro:
    "I manage social media, keep clients and executives organized, and bring a law-trained eye for detail to every task. Social media management, CRM and data work, executive support and customer experience — across banking, legal, hospitality and international call-centre environments.",
};

export const stats = [
  { value: "2", label: "Instagram & TikTok accounts managed" },
  { value: "5+", label: "Years in client-facing roles" },
  { value: "LLB", label: "Bachelor of Laws, Mount Kenya University" },
  { value: "4", label: "Industries: banking, legal, hospitality, BPO" },
];

export type Role = {
  id: string;
  title: string;
  pitch: string;
  points: string[];
};

export const roles: Role[] = [
  {
    id: "media",
    title: "Media & Social Media Manager",
    pitch:
      "Content that stays on-brand, on-schedule and in conversation with its audience.",
    points: [
      "Planned, created and scheduled content for two Instagram & TikTok accounts",
      "Kept messaging, presentation and brand voice consistent across platforms",
      "Monitored comments and DMs and kept community engagement going",
      "Reviewed content performance to refine reach, engagement and direction",
    ],
  },
  {
    id: "va",
    title: "Virtual & Executive Assistant",
    pitch:
      "Calendars, inboxes, records and follow-ups, handled so the executive doesn't have to.",
    points: [
      "Managed executive calendars, appointments and meeting coordination",
      "Handled email correspondence and executive communications accurately",
      "Built CRM-style client databases for follow-up and reporting",
      "Fluent in Google Workspace, Microsoft Office, Slack, Zoom and Teams",
    ],
  },
  {
    id: "ai",
    title: "AI Evaluation & Data Quality",
    pitch:
      "Legal training applied to judging AI output: read closely, check against the rules, explain the reasoning.",
    points: [
      "LLB graduate: legal research, close reading and evidence-based reasoning",
      "Strong written English for clear, rubric-based rationales",
      "Fact-checking and internet research from legal and admin work",
      "Accurate, consistent data entry and record-keeping across CRM systems",
    ],
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  context: string;
  steps: string[];
  outcome: string;
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Campaign management",
    title: "Running two Instagram & TikTok accounts end to end",
    context:
      "Freelance engagement covering the day-to-day social media workflow for two accounts, from content ideas to publishing to community management.",
    steps: [
      "Set content goals from each account's objectives and audience interests",
      "Built a content plan matched to each platform's formats (Reels, TikToks, carousels, stories)",
      "Created, organized and scheduled posts while keeping one brand voice",
      "Responded to comments and messages to keep the community active",
      "Reviewed performance and audience response, then adjusted content direction",
    ],
    outcome:
      "Consistent brand presence and an organized publishing workflow on both accounts, with content direction guided by audience response.",
    tools: ["Instagram", "TikTok", "Google Sheets", "Google Docs"],
  },
  {
    tag: "CRM",
    title: "CRM & client database workflow",
    context:
      "A structured, CRM-style client database built for a sample business: contact details, departments, roles and account status, all searchable.",
    steps: [
      "Designed the data structure: contact, company, department, role, status, next action",
      "Set up status stages so every lead or client has a clear next step",
      "Created follow-up and email-management routines tied to each record",
      "Produced simple reports to show pipeline status at a glance",
    ],
    outcome:
      "A searchable client database that supports organized follow-up and reporting, ready to move into a full CRM platform.",
    tools: ["Google Sheets", "Gmail", "CRM systems", "Microsoft Excel"],
  },
  {
    tag: "Operations",
    title: "Digital communication & workflow portfolio",
    context:
      "A set of sample workflows showing how I'd run an executive's or small team's admin and communication.",
    steps: [
      "Inbox management: triage, labels, templates and follow-up tracking",
      "Scheduling: calendar coordination across time zones",
      "Internet research and data entry with source notes",
      "Client follow-up sequences documented as repeatable processes",
    ],
    outcome:
      "Documented, repeatable processes that make delegation easy and cut down on back-and-forth.",
    tools: ["Google Workspace", "Microsoft Office", "Slack", "Zoom", "Teams"],
  },
];

export const crmSample = [
  { name: "A. Wanjiru", company: "Acme Retail", stage: "New lead", next: "Intro email", due: "Mon" },
  { name: "J. Otieno", company: "Blue Peak Ltd", stage: "Contacted", next: "Follow-up call", due: "Tue" },
  { name: "S. Kamau", company: "Nova Clinics", stage: "Proposal", next: "Send deck", due: "Wed" },
  { name: "L. Achieng", company: "Savanna Foods", stage: "Client", next: "Monthly check-in", due: "Fri" },
];

export const experience = [
  {
    role: "Customer Service Representative",
    org: "CCI Kenya",
    period: "Mar 2025 – Present",
    points: [
      "Support international clients by phone and digital chat, handling inquiries and service issues",
      "Keep accurate customer records and document interactions for follow-up and resolution",
      "Communicate clearly with customers from different backgrounds in a fast-paced, target-driven setting",
    ],
  },
  {
    role: "Executive Assistant",
    org: "Athena",
    period: "2025",
    points: [
      "Managed executive calendars, appointments, scheduling and meeting coordination",
      "Handled email correspondence and executive communications",
      "Kept records organized while managing competing deadlines",
    ],
  },
  {
    role: "Freelance Social Media Manager",
    org: "Independent · Instagram & TikTok",
    period: "Ongoing",
    points: [
      "Managed content, publishing and engagement for two accounts",
      "Kept messaging and brand voice consistent; reviewed performance to refine direction",
    ],
  },
  {
    role: "Front Desk Receptionist",
    org: "Equity Bank",
    period: "Apr 2024 – Dec 2024",
    points: [
      "Managed client inquiries, calls and bookings in a regulated banking environment",
      "Kept client information confidential and accurate",
    ],
  },
  {
    role: "Legal Assistant",
    org: "Chisengo & Co. Advocates",
    period: "Feb 2024 – Dec 2024",
    points: [
      "Did legal research, prepared documentation and supported admin workflows",
      "Handled confidential information accurately",
    ],
  },
  {
    role: "Hotel Receptionist",
    org: "Mooreland Hotel",
    period: "Jan 2018 – Jul 2020",
    points: [
      "Managed reservations, guest communication, payments and front-office operations",
      "Resolved guest concerns and promoted hotel services",
    ],
  },
];

export const skills = [
  {
    group: "Marketing & Content",
    items: [
      "Social media management",
      "Instagram & TikTok",
      "Content planning",
      "Audience engagement",
      "Campaign support",
      "Content writing & editing",
    ],
  },
  {
    group: "Assistance & Operations",
    items: [
      "Calendar & inbox management",
      "CRM management",
      "Lead follow-up",
      "Data entry & records",
      "Reporting",
      "Project & task management",
    ],
  },
  {
    group: "Evaluation & Research",
    items: [
      "Legal research",
      "Fact-checking",
      "Rubric-based judgment",
      "Written rationales",
      "Attention to detail",
      "Confidential data handling",
    ],
  },
];

export const tools = [
  "Instagram",
  "TikTok",
  "Google Workspace",
  "Gmail",
  "Google Sheets",
  "Google Docs",
  "Microsoft Office",
  "CRM systems",
  "Slack",
  "Zoom",
  "Microsoft Teams",
];
