"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface LiquidParallaxProps {
  className?: string;
  depth?: number;
}

export function LiquidParallax({ className, depth = 18 }: LiquidParallaxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const tiltX = useTransform(y, [-1, 1], [depth, -depth]);
  const tiltY = useTransform(x, [-1, 1], [-depth, depth]);

  const smoothX = useSpring(tiltX, { stiffness: 120, damping: 18, mass: 0.8 });
  const smoothY = useSpring(tiltY, { stiffness: 120, damping: 18, mass: 0.8 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      x.set(nx);
      y.set(ny);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      <motion.div
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
          perspective: 1400,
        }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute -left-32 top-0 w-[26rem] h-[26rem] bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.35),transparent_55%)] blur-3xl"
          style={{ translateZ: "-140px" }}
          animate={{ y: [0, -40, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] top-1/3 w-[28rem] h-[28rem] bg-[radial-gradient(circle_at_70%_40%,rgba(99,102,241,0.4),transparent_55%)] blur-3xl"
          style={{ translateZ: "-180px" }}
          animate={{ y: [0, 30, 0], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/4 bottom-[-8%] w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.28),transparent_60%)] blur-3xl"
          style={{ translateZ: "-200px" }}
          animate={{ y: [0, -30, 0], scale: [0.98, 1.05, 0.98], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(59,130,246,0.22), transparent 25%), radial-gradient(circle at 80% 0%, rgba(125,211,252,0.18), transparent 25%), radial-gradient(circle at 50% 80%, rgba(52,211,153,0.14), transparent 25%)",
            translateZ: "-220px",
          }}
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0.15) 0.5px, transparent 1px), linear-gradient(-120deg, rgba(255,255,255,0.12) 0.5px, transparent 1px)",
            backgroundSize: "120px 120px",
            translateZ: "20px",
          }}
          animate={{ opacity: [0.04, 0.12, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
