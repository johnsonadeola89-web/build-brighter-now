import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  description: string;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000, label, description }: AnimatedCounterProps) => {
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
      className={`text-center p-6 rounded-xl border border-gold/20 bg-white/5 backdrop-blur-sm 
        transition-all duration-700 hover:border-gold/50 hover:shadow-[0_0_30px_hsl(45_92%_53%/0.15)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-1">{label}</div>
      <div className="text-xs text-white/50">{description}</div>
    </div>
  );
};

export default AnimatedCounter;
