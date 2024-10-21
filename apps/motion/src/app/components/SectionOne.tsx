import Image from "next/image";
import Pic from "../static/surfer.jpg";
import { ScrollProgress } from "../@types";
import { useTransform, motion } from "framer-motion";

interface Props {
  scrollYProgress: ScrollProgress;
}

export default function ({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      className="sticky top-0 h-screen bg-[#011627] text-[3.5vw] flex flex-col items-center justify-center text-[#FDFFFC] pb-[10vh]"
      style={{ scale, rotate }}
    >
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image src={Pic} alt="img" placeholder="blur" fill />
        </div>
        <p>Transition</p>
      </div>
      <p>Example</p>
    </motion.div>
  );
}
