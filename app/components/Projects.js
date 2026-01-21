"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "FUTOVERSE",
    description:
      "A 3D progressive web application built with modern technologies for students of FUTO. Features include 3D mapping system, real-time chats, virtual stores, and more.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Nnaval/futoverse",
    liveUrl: "https://www.futoverse.com/",
    image: "/Screenshot 2026-01-21 145352.png",
  },
  {
    title: "SOCIAL HUB",
    description:
      "An e-commerce platform with product management, shopping cart functionality, and secure payment processing integration.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/Nnaval/SocialHub",
    liveUrl: "https://mysocialhub.vercel.app/",
    image: "/Screenshot 2026-01-21 150159.png",
  },
  // {
  //   title: "Project Three",
  //   description:
  //     "A task management application that helps teams collaborate and track project progress with intuitive drag-and-drop interface.",
  //   technologies: ["React", "Firebase", "Redux", "Material UI"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
];

function ProjectCard({ project, index, isVisible }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-surface rounded-lg border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 cursor-pointer ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${index * 150}ms` : "0ms",
      }}
    >
      {/* Project Image */}
      <div className="h-48 bg-border/30 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <svg
            className="w-16 h-16 text-text-secondary group-hover:scale-110 transition-transform duration-300"
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
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <svg
            className="w-5 h-5 text-text-secondary group-hover:text-accent transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>
    </a>
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* <span className="text-accent font-mono text-xl mr-2">02.</span> */}
          Projects
        </h2>
        <p
          className={`text-text-secondary text-lg mb-12 max-w-2xl ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Here are some of the projects I&apos;ve worked on. Each project represents
          different skills and technologies I&apos;ve learned along the way.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
