import {
  Braces,
  Boxes,
  DraftingCompass,
  Gauge,
  Globe2,
  Layers3,
  PanelsTopLeft,
  Rocket,
  Search,
  Sparkles,
  Waypoints,
  Workflow,
} from "lucide-react";
import logo from "../data/brand.png";

export const brand = {
  name: "Modren Digital",
  logo,
  favicon: logo,
  shortName: "MD",
  person: "Prashanth Uppari",
  tagline: "Web developer, product designer, and digital strategist",
  email: "supportweb329@gmail.com",
  phone: "+91-8106124493",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/prashanth-uppari-a3441a233/",
  instagram: "https://www.instagram.com/",
  siteUrl: "https://modrendigital.com",
  defaultDescription:
    "Modren Digital builds modern websites, landing pages, and digital experiences for businesses ready to grow online.",
  keywords: [
    "web developer",
    "website designer",
    "business website",
    "frontend developer",
    "full-stack developer",
    "UI UX design",
    "digital strategy",
    "Hyderabad web developer",
  ],
};

export const seo = {
  siteName: brand.name,
  title: `${brand.name} | Web Developer & Digital Solutions`,
  description: brand.defaultDescription,
  url: brand.siteUrl,
  image: brand.favicon,
  keywords: brand.keywords.join(", "),
};

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "₹5,999",
    tagline: "Clean, single-page websites to get you online fast.",
    features: ["Up to 3 sections", "Mobile responsive", "Basic SEO setup", "Contact form"],
  },
  {
    name: "Medium",
    price: "₹9,999",
    tagline: "Multi-page business websites with more depth.",
    features: ["Up to 6 pages", "Mobile responsive", "On-page SEO", "CMS-ready content"],
  },
  {
    name: "Best",
    price: "₹14,999",
    tagline: "Best design and animations for a premium feel.",
    features: [
      "Unlimited sections",
      "Custom UI & micro-animations",
      "Advanced SEO",
      "Priority support",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Web Development",
    icon: Globe2,
    description:
      "Fast, expressive websites engineered to turn attention into measurable business momentum.",
    tags: ["React", "Tailwind", "Node.js"],
    items: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "E-commerce websites",
      "Responsive web applications",
    ],
    pricing: { type: "tiers" as const, plans: pricingPlans },
  },
  {
    number: "02",
    title: "Frontend Development",
    icon: PanelsTopLeft,
    description:
      "Polished interfaces with thoughtful systems, fluid interactions, and excellent performance.",
    tags: ["TypeScript", "React", "Redux"],
    items: [
      "React applications",
      "Responsive interfaces",
      "Component architecture",
      "API integration",
      "State management",
      "Performance optimization",
    ],
    pricing: {
      type: "custom" as const,
      note: "Price varies based on project requirements and features.",
    },
  },
  {
    number: "03",
    title: "Full-Stack Development",
    icon: Braces,
    description:
      "Dependable products spanning intuitive interfaces, secure services, and scalable data layers.",
    tags: ["Node.js", "Express", "MongoDB"],
    items: [
      "REST APIs",
      "Authentication",
      "Database integration",
      "Admin dashboards",
      "Backend services",
      "API architecture",
    ],
    pricing: {
      type: "custom" as const,
      note: "Price varies based on project requirements and features.",
    },
  },
  {
    number: "04",
    title: "UI/UX & Product Experience",
    icon: DraftingCompass,
    description:
      "Clear product journeys and distinctive visual systems grounded in real user and business needs.",
    tags: ["UX Strategy", "Design Systems", "Prototyping"],
    items: [
      "Modern interface design",
      "Responsive layouts",
      "User flows",
      "Design systems",
      "Interactive experiences",
      "Conversion-focused pages",
    ],
    pricing: {
      type: "custom" as const,
      note: "Custom design for every project — no fixed pricing.",
    },
  },
];

export const projects = [
  {
    index: "01",
    name: "Orbit Operations",
    category: "Business Management Platform",
    description: "A unified command center for teams, workflows, and operational insight.",
    stack: ["React", "Node.js", "MongoDB"],
    tone: "signal",
  },
  {
    index: "02",
    name: "Aperture Commerce",
    category: "E-commerce Platform",
    description: "A conversion-led retail experience built for speed, clarity, and scale.",
    stack: ["TypeScript", "Payments", "Analytics"],
    tone: "ember",
  },
  {
    index: "03",
    name: "Gather",
    category: "Service Marketplace",
    description: "A trusted two-sided marketplace connecting specialists with ambitious clients.",
    stack: ["React", "APIs", "Cloud"],
    tone: "mint",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, audience, constraints, and the outcome that matters.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    text: "Shape the structure, user journey, and visual system before committing to code.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    text: "Engineer the experience with clean systems, tight feedback loops, and rigorous craft.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Launch",
    text: "Test, optimize, deploy, and support a confident release into the real world.",
    icon: Rocket,
  },
];

export const benefits = [
  ["Business-first", "Every decision connects to a useful outcome.", Waypoints],
  ["Performance", "Fast interaction and thoughtful delivery by default.", Gauge],
  ["Distinctive craft", "A visual language shaped around your brand.", Sparkles],
  ["Built to evolve", "Systems that stay useful as the business grows.", Workflow],
] as const;

export const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Git",
  "GitHub",
  "Vercel",
  "Cloudinary",
];
