import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  description: string;
}

const AnimatedCounter = ({ end, suffix = "", duration = 1800, label, description }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-2 tracking-tight">
        {count}
        <span className="text-3xl md:text-4xl font-bold">{suffix}</span>
      </div>
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 mb-1">{label}</div>
      <div className="text-xs text-white/50 font-body">{description}</div>
    </div>
  );
};

export default AnimatedCounter;
