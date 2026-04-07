"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      // Creates a horizontal "line" at the middle of the viewport —
      // whichever section crosses it becomes the active one
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
