import { useEffect, useState } from "react";

// Returns the id of the section currently under the sticky navbar (or null).
// Only runs when `enabled` (we only spy on the landing page).
export function useScrollSpy(ids: string[], enabled: boolean, offset = 120): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    let frame = 0;
    const compute = () => {
      let current: string | null = null;
      for (const id of key.split(",")) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= offset && r.bottom > offset) current = id;
      }
      // At the very bottom, the last section may never reach the top: count it as active
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = key.split(",").slice(-1)[0];
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, key, offset]);

  return active;
}

// Respect the "reduce motion" setting when scrolling programmatically
export const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
