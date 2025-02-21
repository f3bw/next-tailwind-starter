"use client";

import { useEffect } from "react";

export function useScrollDirection() {
  useEffect(() => {
    let lastScrollTop = 0;
    const threshold = 10; // Minimal scroll distance to switch to up/down
    const thresholdTop = 50; // Minimal scroll distance from top of window to start

    const handleScroll = () => {
      const nowScrollTop = window.scrollY;

      if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
        // Update Scroll Direction
        const direction = nowScrollTop > lastScrollTop ? "down" : "up";
        document
          .querySelectorAll("[data-scrolling-direction]")
          .forEach((el) =>
            el.setAttribute("data-scrolling-direction", direction)
          );

        // Update Scroll Started
        const started = nowScrollTop > thresholdTop;
        document
          .querySelectorAll("[data-scrolling-started]")
          .forEach((el) =>
            el.setAttribute(
              "data-scrolling-started",
              started ? "true" : "false"
            )
          );

        lastScrollTop = nowScrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
