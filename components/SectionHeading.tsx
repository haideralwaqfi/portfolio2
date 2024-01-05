import React, { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl text-center font-medium capitalize mb-8">
      {children}
    </h2>
  );
}
