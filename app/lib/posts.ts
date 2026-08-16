export type Author = {
  name: string;
  headline: string;
  initials: string;
  color: string;
};

export type Post = {
  id: string;
  author: Author;
  time: string;
  audience: "public" | "connections" | "network";
  content: string;
  image?: {
    src: string;
    alt: string;
  };
  reactions: number;
  comments: number;
  reposts: number;
};

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      headline: "Product Lead · Northwind Labs",
      initials: "SC",
      color: "bg-blue-600",
    },
    time: "2h ago",
    audience: "public",
    content:
      "After six months of cross-team collaboration, I'm thrilled to share our analytics dashboard redesign. We cut load times by 60% and made the insights actually actionable for non-technical stakeholders. A huge thank you to everyone who gave feedback along the way! 🙌",
    image: { src: "/posts/post-1.svg", alt: "Analytics dashboard redesign" },
    reactions: 1284,
    comments: 96,
    reposts: 42,
  },
  {
    id: "2",
    author: {
      name: "Marcus Webb",
      headline: "Founder & CEO at Meridian AI",
      initials: "MW",
      color: "bg-emerald-600",
    },
    time: "5h ago",
    audience: "connections",
    content:
      "A few lessons from two years of running a fully remote company of 120 people across 14 time zones:\n\n1) Async-first isn't about tools, it's about trust.\n2) Over-communicate the context, then cut the meetings.\n3) Hire for ownership, not for hours worked.\n\nWhat's been the biggest unlock for your remote teams?",
    image: { src: "/posts/post-2.svg", alt: "Remote work lessons" },
    reactions: 4320,
    comments: 512,
    reposts: 183,
  },
  {
    id: "3",
    author: {
      name: "Amara Okafor",
      headline: "Sustainability Director at GreenGrid Energy",
      initials: "AO",
      color: "bg-teal-600",
    },
    time: "8h ago",
    audience: "public",
    content:
      "We published our net zero roadmap today and I want to be fully transparent: the next 24 months are the hardest part. Scope 3 emissions remain the biggest lever, and we can't solve them alone. This is a call to our entire supply chain — let's engineer this together. 🌍",
    image: { src: "/posts/post-3.svg", alt: "Sustainability roadmap chart" },
    reactions: 2109,
    comments: 148,
    reposts: 97,
  },
  {
    id: "4",
    author: {
      name: "Dmitri Volkov",
      headline: "ML Engineer · Aurora Systems",
      initials: "DV",
      color: "bg-violet-600",
    },
    time: "1d ago",
    audience: "network",
    content:
      "We just open-sourced our internal prompt-evaluation framework. After benchmarking it against 40 production use cases, here's the one insight I'd share with every team shipping LLM features:\n\nFrame evaluation as a product metric, not a model metric. Your guardrails are only as good as the scenarios you test.\n\nFull write-up in the comments — would love your take.",
    image: { src: "/posts/post-4.svg", alt: "AI product diagram" },
    reactions: 982,
    comments: 74,
    reposts: 21,
  },
  {
    id: "5",
    author: {
      name: "Elena Santos",
      headline: "Design Engineer · Fable Studio",
      initials: "ES",
      color: "bg-rose-500",
    },
    time: "2d ago",
    audience: "connections",
    content:
      "Unpopular opinion: your design system is a product too. If it doesn't have an owner, a roadmap, and a way to measure adoption, it's just a shared stylesheet with extra steps.\n\nWe treated ours like an internal SaaS and adoption jumped from 34% to 88% in one quarter.",
    reactions: 3411,
    comments: 265,
    reposts: 110,
  },
  {
    id: "6",
    author: {
      name: "James Rodriguez",
      headline: "Principal Engineer · Core Banking, FinLeap",
      initials: "JR",
      color: "bg-indigo-600",
    },
    time: "3d ago",
    audience: "public",
    content:
      "Career advice I wish someone gave me earlier:\n\n• Your first senior title is a promotion, not a transformation.\n• Say no to the work that grows your résumé but shrinks your energy.\n• Read the code on the other side of your org's boundary at least once a month.\n\nWhat's one piece of advice you'd add?",
    reactions: 5667,
    comments: 830,
    reposts: 246,
  },
  {
    id: "7",
    author: {
      name: "Hana Kim",
      headline: "People Ops Lead · Orbit Logistics",
      initials: "HK",
      color: "bg-amber-600",
    },
    time: "4d ago",
    audience: "network",
    content:
      "We're hiring for 12 engineering roles across Berlin and Lisbon and I need to be honest with candidates: our interview process has changed. No more whiteboard pop quizzes. Instead, a paid take-home, a system design chat, and a team fit conversation.\n\nSmart people are out there — too many good companies scare them away. We're done doing that. DM me or comment below!",
    reactions: 1876,
    comments: 203,
    reposts: 88,
  },
];