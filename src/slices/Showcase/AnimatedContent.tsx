"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedContent = ({ children }: { children: React.ReactNode }) => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { y: 0 });
        return;
      }

      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=10%",
            toggleActions: "play pause resume reverse",
            // markers: true,
          },
        },
      );
    },
    { scope: container },
  );

  return <div ref={container}>{children}</div>;
};

export default AnimatedContent;
