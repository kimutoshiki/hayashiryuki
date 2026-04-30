"use client";

import { useState } from "react";
import { agentNetwork, totalAgents } from "@/lib/agents";

// Simplified region groupings — visual abstraction (not geographically precise),
// optimized for accessibility and clarity over cartographic accuracy.
const regions = [
  { id: "hokkaido", label: "北海道", x: 78, y: 6 },
  { id: "tohoku", label: "東北", x: 70, y: 22 },
  { id: "kanto", label: "関東", x: 70, y: 42 },
  { id: "chubu", label: "中部", x: 52, y: 42 },
  { id: "kansai", label: "近畿", x: 38, y: 52 },
  { id: "chugoku", label: "中国", x: 24, y: 52 },
  { id: "shikoku", label: "四国", x: 28, y: 66 },
  { id: "kyushu", label: "九州", x: 12, y: 64 },
  { id: "okinawa", label: "沖縄", x: 8, y: 88 },
] as const;

type RegionId = (typeof regions)[number]["id"];

export function JapanMap() {
  const [active, setActive] = useState<RegionId | null>(null);

  const counts = regions.map((r) => ({
    ...r,
    count: agentNetwork
      .filter((p) => p.region === r.id)
      .reduce((s, p) => s + p.agents, 0),
    prefectures: agentNetwork.filter((p) => p.region === r.id),
  }));

  const activeRegion = counts.find((r) => r.id === active);

  return (
    <div className="grid gap-8 md:grid-cols-12 items-start">
      <div className="md:col-span-7">
        <svg
          role="img"
          aria-label={`日本全国の代理店ネットワーク。全${totalAgents}社が47都道府県に展開。`}
          viewBox="0 0 100 100"
          className="w-full h-auto rounded-2xl bg-base border border-border"
        >
          <rect width="100" height="100" fill="#FAF7F2" />
          {/* Decorative archipelago abstraction */}
          {counts.map((r) => {
            const isActive = r.id === active;
            const radius = 4 + Math.min(r.count, 6) * 0.8;
            return (
              <g key={r.id}>
                <circle
                  cx={r.x}
                  cy={r.y}
                  r={radius}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive ? "fill-cta" : "fill-primary/85"
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-label={`${r.label}地方：${r.count}社の認定代理店`}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(r.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(r.id)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(r.id)}
                />
                <text
                  x={r.x}
                  y={r.y + radius + 3.5}
                  textAnchor="middle"
                  className="fill-text-muted text-[3px] pointer-events-none select-none"
                >
                  {r.label}
                </text>
                <text
                  x={r.x}
                  y={r.y + 1.2}
                  textAnchor="middle"
                  className="fill-white text-[3.4px] font-bold pointer-events-none select-none"
                >
                  {r.count}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-3 text-xs text-text-muted text-center">
          地域ボタンをクリックまたはフォーカスすると、各地方の代理店数を確認できます。
        </p>
      </div>

      <div className="md:col-span-5">
        <div className="rounded-2xl bg-surface border border-border p-6 md:p-8 min-h-[20rem]">
          <p className="text-accent-700 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {activeRegion ? `${activeRegion.label}地方` : "Network Coverage"}
          </p>

          {activeRegion ? (
            <>
              <p className="font-serif text-primary text-3xl font-bold mb-3">
                {activeRegion.count}
                <span className="text-base font-normal text-text-muted ml-1">社</span>
              </p>
              <ul
                className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-text"
                aria-live="polite"
              >
                {activeRegion.prefectures.map((p) => (
                  <li key={p.code}>
                    {p.name}{" "}
                    <span className="text-text-muted">({p.agents})</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="font-serif text-primary text-3xl font-bold mb-3">
                全国 {totalAgents}社
              </p>
              <p className="text-text-muted leading-relaxed text-sm">
                建設業許可を受けた施工認定代理店「おやじの隠れ家ネットワーク」が、北海道から沖縄、離島まで対応。
                どこにお住まいでも、現地のチームが施工を担当します。
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
