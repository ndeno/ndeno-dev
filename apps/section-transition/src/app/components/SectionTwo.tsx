import Image from "next/image";
import Pic from "../static/landscape.jpg";
import { useTransform, motion } from "framer-motion";
import { ScrollProgress } from "../@types";

interface Props {
  scrollYProgress: ScrollProgress;
}

export default function ({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image src={Pic} alt="img" placeholder="blur" fill />
    </motion.div>
  );
}
