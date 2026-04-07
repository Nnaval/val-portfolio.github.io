"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  // { value: "4+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
];

export default function About() {
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
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          About Me
        </h2>
        <div
          className={`section-underline ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        />

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <p
              className={`text-text-secondary text-lg leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              Hello! I&apos;m a frontend web developer focused on building
              secure, high-performance, and user-centered digital products. I
              specialize in React and Next.js and enjoy creating scalable,
              reliable interfaces.
            </p>
            <p
              className={`text-text-secondary text-lg leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              I&apos;m always learning and currently looking for
              opportunities to join a team where I can contribute, grow, and
              build meaningful products.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 pt-4 ${
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border rounded-xl p-4 text-center hover:border-accent/50 transition-colors duration-300"
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image with gradient ring */}
          <div
            className={`flex justify-center md:justify-end ${
              isVisible ? "animate-slide-in-right delay-200" : "opacity-0"
            }`}
          >
            <div
              className="p-[3px] rounded-full hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
              }}
            >
              <div className="rounded-full overflow-hidden bg-background w-64 h-64">
                <Image
                  src="/IMG_6577.JPG"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
