import { useEffect, useRef, useState } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

export interface RevealOptions {
  direction?: RevealDirection;
  delay?: number; // ms, use for staggering siblings
  distance?: number; // px
  duration?: number; // ms
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveals an element once, the first time it scrolls into view.
// Returns a ref to attach and an `sx` object with the hidden/visible styles.
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  direction = "up",
  delay = 0,
  distance = 36,
  duration = 800,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  // With "reduce motion" on, everything is visible right away
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const hidden: Record<RevealDirection, string> = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, ${-distance}px, 0)`,
    left: `translate3d(${-distance * 1.5}px, 0, 0)`,
    right: `translate3d(${distance * 1.5}px, 0, 0)`,
    scale: "scale(0.88)",
    none: "none",
  };

  const sx = {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : hidden[direction],
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
    willChange: shown ? "auto" : "opacity, transform",
  } as const;

  return { ref, sx, shown };
}
