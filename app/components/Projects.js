"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "FUTOVERSE",
    description:
      "A 3D progressive web application built with modern technologies for FUTO students. Features include 3D mapping system, real-time chats, virtual stores, and more.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Nnaval/futoverse",
    liveUrl: "https://www.futoverse.com/",
    image: "/Screenshot 2026-01-21 145352.png",
  },
  {
    title: "SNIPSTASH",
    description:
      "A full-stack web app that lets developers save, organize, and quickly retrieve code snippets. Snippets can be shared to anyone via shareable links. Built as a productivity tool for managing reusable code across projects and teams.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/Nnaval/SnipStash",
    liveUrl: "https://snipstashcode.vercel.app/",
    image: "/Screenshot 2026-02-16 151958.png",
  },
  {
    title: "VIDMETRICS",
    description:
      "A SaaS-style YouTube analytics tool that lets creators, marketers, and agencies analyze any competitor's channel performance instantly. Paste a channel URL and get a full breakdown of video metrics, engagement rates, trending detection, and a proprietary channel analysis.",
    technologies: ["Next.js", "PostgreSQL", "Recharts", "TypeScript"],
    githubUrl: "https://github.com/Nnaval/vidmetrics",
    liveUrl: "https://vidmetrics-analyzer.vercel.app/",
    image: "/Screenshot 2026-04-07 114548.png",
  },
  {
    title: "SOCIAL HUB",
    description:
      "A platform that directly connects recruiters with skilled freelancers, or anyone can showcase their skills and expertise to the world.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/Nnaval/SocialHub",
    liveUrl: "https://mysocialhub.vercel.app/",
    image: "/Screenshot 2026-01-21 150159.png",
  },
];

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`group relative bg-surface rounded-xl border border-border overflow-hidden
        transition-all duration-500 flex flex-col h-full cursor-pointer
        hover:border-accent/60 hover:shadow-2xl hover:-translate-y-2
        ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      {/* Shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer z-10" />

      {/* Glow border effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{ boxShadow: "0 0 30px rgba(124,58,237,0.15) inset" }}
      />

      {/* Project Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-border/30 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="relative z-20 p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`${project.title} GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`${project.title} live site`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md font-mono"
              style={{
                background: "rgba(124,58,237,0.1)",
                color: "#a78bfa",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Projects
        </h2>
        <div
          className={`section-underline ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        />
        <p
          className={`text-text-secondary text-lg mb-12 max-w-2xl ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Here are some of the projects I&apos;ve worked on. Each project
          represents different skills and technologies I&apos;ve learned along
          the way.
        </p>

        {/* Grid: 3 cols on lg. Last lone card auto-centers via CSS. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`w-full ${
                projects.length % 3 === 1 && index === projects.length - 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <ProjectCard
                project={project}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
