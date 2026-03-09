import React from "react"
import { Project, Experience, SkillCategory, NavItem } from "./types"
import { Layers, Database, Server, Cpu, Smartphone } from "lucide-react"

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "https://blog.rajnish.tech" },
]

export const CONTACT_INFO = {
  email: "work@rajnish.tech",
  linkedin: "https://www.linkedin.com/in/rajnishps/",
  github: "https://github.com/rajnishps/",
  location: "India / Remote",
}

export const HERO_CONTENT = {
  greeting: "Hello, I'm Rajnish.",
  headline: "Full-Stack & Mobile Engineer building scalable fintech systems.",
  subheadline:
    "Specializing in React Native, Next.js, Go, and Node.js to create event-driven microservices and cross-platform applications.",
}

export const ABOUT_CONTENT = `Software Engineer specializing in React Native, Next.js, Go, and Node.js, building scalable fintech platforms, event-driven microservices, and cross-platform applications. Experienced in monorepo architectures and distributed systems. I design systems that are not only performant but also maintainable and secure.`

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layers className="w-6 h-6" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "Styled Components",
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Zustand", "TanStack Query", "Reanimated", "MMKV"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Go (Gin)", "Node.js", "NestJS", "GraphQL", "gRPC", "RabbitMQ"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Redis", "Prisma", "SQL", "MongoDB"],
  },
  {
    title: "DevOps",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes", "Nx Monorepo", "CI/CD", "Sentry"],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Full-Stack / Mobile Engineer",
    company: "DisruptTech (FinTech)",
    period: "2024 - Present",
    description: [
      "Architected a React Native fintech application for wallets, card management, and user onboarding.",
      "Implemented mobile state management using Zustand and TanStack Query for real-time data sync.",
      "Built secure mobile authentication flows including biometric login, 2FA, and session security controls.",
      "Designed event-driven microservices using Go, RabbitMQ, and gRPC to power mobile and web clients.",
      "Built multi-tenant whitelabel infrastructure for rapid deployment of branded fintech products.",
    ],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Ramaera Industries Limited",
    period: "2023 - 2024",
    description: [
      "Built and maintained the main company website using Next.js, GraphQL, Redux Toolkit, and Styled Components.",
      "Developed PlanetSera web platform and React Native rewards app.",
      "Implemented KYC user portal and admin dashboard with document verification workflows.",
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: "p4",
    title: "Fypto Mobile App",
    description:
      "Cross-platform fintech mobile app for wallets, card lifecycle management, and real-time transactions with biometric auth.",
    techStack: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
    imageUrl: "/fypto.jpg",
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p5",
    title: "Cloud-Native FinTech Platform",
    description:
      "Multi-service fintech monorepo with 7+ microservices for wallets, cards, payments, and KYC using event-driven architecture.",
    techStack: ["Go", "Node.js", "Nx", "PostgreSQL", "RabbitMQ"],
    imageUrl: "/architecture.png",
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p6",
    title: "White-Label Platform Core",
    description:
      "Multi-tenant backend for branded platforms with tenant-level business logic and automated fee/commission engines.",
    techStack: ["NestJS", "Prisma", "GraphQL", "Next.js"],
    imageUrl: "/whitelabel.jpg",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    id: "p7",
    title: "Enterprise Dashboards",
    description:
      "High-performance dashboards for KYC approvals and financial monitoring with server-side pagination.",
    techStack: ["Next.js", "GraphQL", "TanStack Table"],
    imageUrl: "/dashboard.jpg",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    id: "p1",
    title: "rp-blog",
    description:
      "Full-stack blogging platform with Google authentication, private/public post visibility, markdown editor with live preview, voting, comments, and searchable infinite public feed.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "PostgreSQL",
      "Drizzle ORM",
      "Zustand",
    ],
    imageUrl: "/char-min.png",
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p2",
    title: "rp-paste",
    description:
      "Minimal Pastebin-style app that turns large text into short share links, enforces a 100KB size limit, auto-copies generated URLs, and serves raw paste content at `/p/[id]` with preserved formatting.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
    ],
    imageUrl: "/dashboard.jpg",
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p3",
    title: "rp-linked",
    description:
      "URL shortener supporting custom slugs and auto-generated slugs, strict URL/slug validation, reusable short links for existing targets, and fast 302 redirect routing from `/{slug}`.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "NanoID",
      "Tailwind CSS",
    ],
    imageUrl: "/architecture.png",
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
]
