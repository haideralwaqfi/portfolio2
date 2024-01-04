import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function IntroIcons() {
  return (
    <div className="flex-center-all gap-2 px-4 text-lg font-medium flex-col sm:flex-row ">
      <Link
        href="#contact"
        className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">
        Contact Me <BsArrowRight />
      </Link>

      <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
        Download CV <HiDownload />
      </a>
      <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full">
        <BsLinkedin />
      </a>
      <a className="bg-white text-[1.35rem] text-gray-700 p-4 flex items-center gap-2 rounded-full">
        <FaGithubSquare />
      </a>
    </div>
  );
}
