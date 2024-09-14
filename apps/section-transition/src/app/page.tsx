"use client";
import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  const container = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <SectionOne scrollYProgress={scrollYProgress} />
      <SectionTwo scrollYProgress={scrollYProgress} />
    </main>
  );
}
