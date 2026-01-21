"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* <span className="text-accent font-mono text-xl mr-2">01.</span> */}
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-4">
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
            {/* <p
              className={`text-text-secondary text-lg leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              Currently, I&apos;m looking for opportunities to join a team where
              I can contribute, learn, and grow as a developer while building
              products that make a difference.
            </p> */}
          </div>
          <div
            className={`flex justify-center md:justify-end ${
              isVisible ? "animate-slide-in-right delay-200" : "opacity-0"
            }`}
          >
            <div className="w-64 h-64 rounded-full border-2 border-border hover:border-accent transition-all duration-300 overflow-hidden">
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
    </section>
  );
}
