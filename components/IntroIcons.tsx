import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function IntroIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex-center-all gap-2 px-4 text-lg font-medium flex-col sm:flex-row ">
      <Link
        href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:bg-gray-950 button-motion">
        Contact Me{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>

      <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none   button-motion border border-black/10"
        href="/haiderAlwaqfiResume.docx"
        download>
        Download CV{" "}
        <HiDownload className="opacity-60 group-hover:translate-y-1" />
      </a>
      <a
        className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none   button-motion border border-black/10 hover:text-gary-950"
        href="https://www.linkedin.com/in/haider-al-waqfi-pmp%C2%AE-76149480/"
        target="_blank">
        <BsLinkedin />
      </a>
      <a
        className="bg-white text-[1.35rem] text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none   button-motion border border-black/10 hover:text-gary-950"
        href="https://github.com/haideralwaqfi"
        target="_blank">
        <FaGithubSquare />
      </a>
    </motion.div>
  );
}
