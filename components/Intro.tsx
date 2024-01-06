"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import IntroParagraph from "./IntroParagraph";

import IntroIcons from "./IntroIcons";

import { useSectionInView } from "@/app/lib/hooks";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}>
            <Image
              src={`/personal.jpg`}
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
              alt="personal image"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl">
            👋
          </motion.span>
        </div>
      </div>
      <IntroParagraph />
      <IntroIcons />
    </section>
  );
}

export default Intro;
