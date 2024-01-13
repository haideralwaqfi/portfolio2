import admin from "@/public/admin.png";
import issueTracker from "@/public/issueTracker.png";
import marketHouse from "@/public/marketHouse.png";
import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineScience } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's degree",
    location: "Irbid, Jordan",
    description:
      "Medical Laboratory Sciences (Biotechnology and Microbiology) at Jordan University of Science and Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Laboratory Technician",
    location: "Amman, Jordan",
    description:
      "Working as Medical Laboratory Technician for the Medlabs Consultancy Group in Amman",
    icon: React.createElement(MdOutlineScience),
    date: "2013 - 2015",
  },
  {
    title: "Clinical Application Specialist/Analyst",
    location: "Amman, Jordan",
    description:
      "Lead and engage in the implementation of substantial clinical process modifications across diverse clinical areas, including ambulatory, outpatient, and inpatient departments.",
    icon: React.createElement(HiOutlineDesktopComputer),
    date: "2015 - 2020",
  },
  {
    title: "Medical Laboratory Technologist",
    location: "Irbid, Jordan",
    description:
      "Acquire substantial proficiency in clinical IT systems and applications specifically tailored for hospital and laboratory environments within the intricate domain of In Vitro Diagnostics, effectively integrating technology advancements to enhance diagnostic accuracy and efficiency.",
    icon: React.createElement(MdOutlineScience),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Admin",
    description:
      "This is an admin page using next.js and nextAuth for authentication, and it contains a dashboard to view the update information about the client page.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: admin,
  },
  {
    title: "Issue Tracker",
    description:
      "An Application to register the technical issues and assign it to a specific personal to deal with it, and it can be update according to it status",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: issueTracker,
  },
  {
    title: "Market House",
    description:
      "A public web app for quick searching for rent houses. It shows google maps and the location of the houses and all other information regarding the houses.",
    tags: ["React", "MongoDB"],
    imageUrl: marketHouse,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
