"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`text-accent font-mono text-lg sm:text-xl md:text-2xl mb-4 ${
            isLoaded ? "animate-fade-in-down" : "opacity-0"
          }`}
        >
          Hi, I&apos;m
        </p>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 ${
            isLoaded ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Valentine
        </h1>
        {/* <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-secondary mb-6 ${
            isLoaded ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          I build things for the web.
        </h2> */}
        <p
          className={`text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${
            isLoaded ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          I&apos;m a frontend web developer specializing in building
          exceptional digital experiences. Currently focused on creating
          accessible, secure, and human-centered products.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isLoaded ? "animate-fade-in-up delay-400" : "opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${
            isLoaded ? "animate-fade-in delay-700" : "opacity-0"
          }`}
        >
          <div className="animate-float">
            <svg
              className="w-6 h-6 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
