"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const Canvas3D = dynamic(() => import("./ItakuraCanvas").then((m) => m.ItakuraCanvas), {
  ssr: false,
  loading: () => <ItakuraStaticSVG />,
});

function ItakuraStaticSVG() {
  return (
    <svg
      role="img"
      aria-label="板倉工法の断面図。柱と柱の間に厚さ約3cmの杉板を水平に落とし込み、丈夫な壁面を構成する。"
      viewBox="0 0 320 280"
      className="w-full h-full"
    >
      <defs>
        <pattern id="planks" width="320" height="14" patternUnits="userSpaceOnUse">
          <rect width="320" height="14" fill="#C7884A" opacity="0.18" />
          <line x1="0" y1="14" x2="320" y2="14" stroke="#9d6932" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="280" fill="#FAF7F2" />
      {/* posts */}
      <rect x="40" y="30" width="22" height="220" fill="#2D4A3E" />
      <rect x="258" y="30" width="22" height="220" fill="#2D4A3E" />
      {/* planks dropped between posts */}
      <rect x="62" y="30" width="196" height="220" fill="url(#planks)" />
      <rect x="62" y="30" width="196" height="220" fill="none" stroke="#9d6932" strokeWidth="0.4" />
      {/* labels */}
      <text x="51" y="270" textAnchor="middle" className="fill-text-muted text-[10px]">柱</text>
      <text x="269" y="270" textAnchor="middle" className="fill-text-muted text-[10px]">柱</text>
      <text x="160" y="270" textAnchor="middle" className="fill-text-muted text-[10px]">
        杉板（厚さ約30mm）を落とし込み
      </text>
    </svg>
  );
}

function subscribePrefersReducedMotion(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ItakuraDiagram3D() {
  const reduced = useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotion,
    () => false,
  );

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-base border border-border overflow-hidden">
      {reduced ? <ItakuraStaticSVG /> : <Canvas3D />}
      <p className="absolute bottom-3 left-3 right-3 text-xs text-text-muted bg-surface/85 px-3 py-2 rounded-lg">
        柱と柱の間に厚さ約3cmの国産杉板を水平に落とし込み、強い壁面を構成。
      </p>
    </div>
  );
}
