"use client";
import { Pause, Play } from "lucide-react";
import { useMotionPreference } from "./MotionProvider";

export function MotionToggle() {
  const { paused, toggle } = useMotionPreference();
  return (
    <button type="button" onClick={toggle} aria-pressed={paused} className="flex min-h-11 items-center gap-2 transition-colors hover:text-white">
      {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
      {paused ? "Resume motion" : "Pause motion"}
    </button>
  );
}
