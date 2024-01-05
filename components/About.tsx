"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem]
    text-center leading-8 sm:mb-40">
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        Accomplished Clinical Information Technology Specialist with a strong
        background in implementing transformative solutions within healthcare
        settings. Skilled in spearheading clinical process modifications across
        diverse departments, optimizing workflow efficiencies, and ensuring
        seamless integration of IT solutions. Proven track record in providing
        application support, troubleshooting, and comprehensive training to
        facilitate departmental analytics and unit reporting. Proficient in
        developing IT environments tailored for laboratory automation,
        collaborating with regional teams to drive business growth while
        supporting existing customer bases.
      </p>
      <p>
        Trusted advisor adept at communicating technical information effectively
        to enable proficient utilization of IT tools. Holds a Bachelor's Degree
        in Medical Laboratory Sciences, complemented by expertise in Healthcare
        IT Protocols (HL7, ASTM) and PMI-Project Management Professional (PMP)
        certification.
      </p>
      <p></p>
    </motion.section>
  );
}
