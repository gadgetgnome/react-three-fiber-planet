import { useEffect, useRef } from "react";

export default function useScroll() {
  const getScrollProgress = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    const p = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    return p;
  };

  const scrollProgress = useRef(0);

  useEffect(() => {
    const onScroll = (evt) => {
      scrollProgress.current = getScrollProgress();
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollProgress;
}
