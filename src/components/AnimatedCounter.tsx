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
      {/* Circular ring */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--gold) / 0.15)"
            strokeWidth="2"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="2.5"
            strokeDasharray={`${(count / end) * 339.29} 339.29`}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            {count}
          </div>
          <span className="text-sm md:text-base font-bold text-gold">{suffix}</span>
        </div>
      </div>
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 mb-1">{label}</div>
      <div className="text-xs text-white/50 font-body">{description}</div>
    </div>
  );
};

export default AnimatedCounter;
