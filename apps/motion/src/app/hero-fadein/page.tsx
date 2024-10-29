"use client";
import React from "react";
import CardList from "./components/Cardlist";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Orange from "./static/orange4.jpg";
import Hero from "./components/Hero";
import { div } from "framer-motion/client";

type FadeInProps = {
  imageSrc: StaticImageData;
};

function FadeIn({ imageSrc }: FadeInProps) {
  const ref = React.useRef(null);
  const inView = useInView(ref);

  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (inView) {
      setShow(() => true);
    }
  }, [inView]);

  return (
    <div className="container mx-auto px-8">
      <motion.div
        className="w-full flex my-8"
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        animate={show ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex-1 text-xl justify-centre p-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae
          corporis dolorem ea rem hic ipsam dolores.
        </div>
        <div className="flex-1">
          <Image src={imageSrc} alt="orange-header" className="rounded-lg" />
        </div>
      </motion.div>
    </div>
  );
}

export default function () {
  return (
    <div className="container mx-auto">
      <Hero />
      <CardList />
      <FadeIn imageSrc={Orange} />
      <FadeIn imageSrc={Orange} />
      <FadeIn imageSrc={Orange} />
      <FadeIn imageSrc={Orange} />
    </div>
  );
}
