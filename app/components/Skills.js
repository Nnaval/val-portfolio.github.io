"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  // "Python",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Git",
  
];

export default function Skills() {
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
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* <span className="text-accent font-mono text-xl mr-2">03.</span> */}
          Skills
        </h2>
        <p
          className={`text-text-secondary text-lg mb-12 max-w-2xl ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Technologies and tools I&apos;ve been working with:
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-5 py-3 bg-surface border border-border rounded-xl text-foreground
                hover:border-accent hover:text-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/20
                transition-all duration-300 cursor-default
                ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
