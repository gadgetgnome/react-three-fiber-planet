import { useEffect, useRef } from "react";

export default function useMouse() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const onScroll = (evt) => {
     scrollProgress.current = evt.clientX / window.innerWidth;
        
    };
    window.addEventListener("mousemove", onScroll);
    return () => window.removeEventListener("mousemove", onScroll);
  }, []);

  return scrollProgress;
}
