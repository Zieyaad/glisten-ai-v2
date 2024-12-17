"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

function StarGrid() {
  const container = useRef(null);

  return <div ref={container}></div>;
}

export default StarGrid;
