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
import projectlogo from "../data/sura-delice.png";
import rakzsstudio from "../data/rakzsstudio.png";
import cocktail from "../data/cocktail.png";
import theroyalplalace from "../data/theroyalplalace.png";

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
  siteUrl: "https://TBdigital.com",
  defaultDescription:
    "RV Digital builds modern websites, landing pages, and digital experiences for businesses ready to grow online.",
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
  { label: "Pricing", to: "/pricing" as const },
  { label: "Contact", to: "/contact" as const },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "₹5,999",
    tagline: "A clean, professional website to establish your online presence.",
    features: [
      "Single-page website",
      "Up to 8 content sections",
      "Modern and clean UI design",
      "Mobile, tablet & desktop responsive",
      "Basic animations and transitions",
      "Contact form integration",
      "WhatsApp chat integration",
      "Social media links integration",
      "Basic SEO optimization",
      "Google Maps integration",
      "Fast-loading optimized website",
      "Deployment and hosting assistance",
      "1 round of revisions",
      "Free deployment assistance",
    ],
  },
  {
    name: "Medium",
    price: "₹9,999",
    tagline: "A complete business website designed to build trust and attract customers.",
    features: [
      "Up to 6 website pages",
      "Custom UI design",
      "Mobile, tablet & desktop responsive",
      "Modern animations and transitions",
      "Interactive navigation and dropdowns",
      "Contact form with email integration",
      "WhatsApp business integration",
      "Google Maps integration",
      "Social media integration",
      "On-page SEO optimization",
      "Image optimization",
      "Custom 404 error page",
      "Deployment and hosting assistance",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Best",
    price: "₹14,999",
    tagline:
      "A premium digital experience with custom design, smooth animations, and advanced interactions.",
    features: [
      "Up to 10 website pages",
      "Premium custom UI/UX design",
      "Fully responsive design",
      "GSAP animations",
      "Smooth scrolling effects",
      "Interactive hover effects and animations",
      "Custom hero section design",
      "Advanced page transitions",
      "Advanced on-page SEO",
      "Performance optimization",
      "Image and asset optimization",
      "Contact form with email integration",
      "WhatsApp business integration",
      "Google Maps integration",
      "Social media integration",
      "Custom 404 page",
      "Deployment and hosting assistance",
      "3 rounds of revisions",
      "Priority support after delivery",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Web Design",
    icon: Globe2,
    description:
      "Fast, expressive websites engineered to turn attention into measurable business momentum.",
    tags: ["React", "Tailwind"],
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
    tags: ["javascript", "React Js", "Redux Toolkit"],
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
    tags: ["Node.js", "Express Js", "React js", "MongoDB"],
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
    title: "App Design [Developement]",
    icon: DraftingCompass,
    description:
      "Clear product journeys and distinctive visual systems grounded in real user and business needs.",
    tags: ["React Native", "Javascript", "Redux Toolkit", "Animations"],
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
    name: "Sura Delice",
    logo: projectlogo,
    link: "https://sura-delice.vercel.app/",
    category: "Fine Dining & Hospitality Web App",
    description:
      "An interactive culinary platform with seamless table bookings, curated menus, and guest experience workflows.",
    stack: ["React.js", "Redux", "Node.js", "MongoDB"],
    tone: "signal",
  },
  {
    index: "02",
    name: "RAKZS STUDIO",
    logo: rakzsstudio,
    link: "https://rakzs-studio.vercel.app/",
    category: "Photography & Cinema Portfolio Platform",
    description:
      "An elegant, editorial web experience showcasing wedding photography, cinema, and seamless client inquiry bookings.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    tone: "signal",
  },
  {
    index: "03",
    name: "Cocktail",
    logo: cocktail,
    link: "https://mocktails-three.vercel.app/",
    category: "Cocktail Bar & Lounge Landing Experience",
    description:
      "An immersive, modern landing page featuring premium mixology showcases, interactive drink menus, and bespoke summer visuals.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    tone: "signal",
  },
  {
    index: "04",
    name: "The Royal Palace",
    logo: theroyalplalace,
    link: "https://royal-lime.vercel.app/",
    category: "Multi-Cuisine Restaurant & Banquet Booking Web App",
    description:
      "A luxury culinary platform for a royal Hyderabadi dining and banquet destination, featuring table reservations, interactive digital menus, and banquet inquiry booking.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    tone: "signal",
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
