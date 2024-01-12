"use client";
import SectionDivider from "@/components/SectionDivider";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}
