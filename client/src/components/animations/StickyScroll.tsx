'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface StickyScrollProps {
  children: ReactNode;
  className?: string;
}

export default function StickyScroll({ children, className = '' }: StickyScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  return (
    <div ref={ref} className={`sticky top-0 ${className}`}>
      <motion.div
        style={{
          opacity,
          scale,
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

