"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "afeittado.",
      className: "text-blue-800 dark:text-blue-800",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
