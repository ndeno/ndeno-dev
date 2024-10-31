import Image from "next/image";
import { animate, motion } from "framer-motion";
import Orange from "../static/orange2.jpg";

export default function Hero() {
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
            Generic Hero Fade In
          </h1>
          <span className="w-36 py-8 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
        </div>
      </motion.div>
      <motion.div className="flex-1" {...animationOptions}>
        <Image src={Orange} alt="orange-header" className="rounded-lg" />
      </motion.div>
    </div>
  );
}
