"use client";
import { projectsData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";
import React from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
