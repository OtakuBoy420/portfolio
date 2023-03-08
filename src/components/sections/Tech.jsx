import React from "react";
import CreateSection from "../hoc/CreateSection";
import { technologies } from "../../constants/content";
import { BallCanvas } from "../canvas";
export function Tech() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 py-8 sm:py-24">
      {technologies.map((tech) => (
        <div className="h-28 w-28 cursor-grab active:cursor-grabbing" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
}

export default CreateSection(Tech, "Technologies");
