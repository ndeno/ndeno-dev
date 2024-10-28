"use client";
import Image from "next/image";
import CardList from "./components/Cardlist";

import { animate, motion } from "framer-motion";

import Orange1 from "./static/orange2.jpg";

function Hero() {
  const animationOptions = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: 1,
    },
  };

  return (
    <div id="hero" className="h-full m-16 flex">
      <motion.div className="flex-1" {...animationOptions}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-[#FF7466] text-center">
            Generic Category Section
          </h1>
          <span className="w-36 py-8 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
        </div>
      </motion.div>
      <motion.div className="flex-1" {...animationOptions}>
        <Image src={Orange1} alt="orange-header" className="rounded-lg" />
      </motion.div>
    </div>
  );
}

export default function () {
  return (
    <div className="container mx-auto">
      <Hero />
      <CardList />
    </div>
  );
}
