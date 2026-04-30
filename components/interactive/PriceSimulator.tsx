"use client";

import { useId, useMemo, useState } from "react";
import { houseTypes, estimatePrice, formatYen } from "@/lib/pricing";

export function PriceSimulator() {
  const id = useId();
  const [typeId, setTypeId] = useState(houseTypes[1].id);
  const [tsubo, setTsubo] = useState<number>(houseTypes[1].baseSizeTsubo);

  const selected = useMemo(
    () => houseTypes.find((h) => h.id === typeId) ?? houseTypes[1],
    [typeId],
  );

  const price = estimatePrice(typeId, tsubo);
  const minTsubo = selected.baseSizeTsubo;
  const maxTsubo = selected.baseSizeTsubo + 16;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-10 shadow-card">
      <p className="text-accent-700 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-2">
        Quick Estimator
      </p>
      <h3 className="font-serif text-primary text-2xl md:text-3xl mb-1">
        概算価格シミュレーター
      </h3>
      <p className="text-text-muted text-sm mb-8">
        タイプと広さを選ぶと、目安価格を瞬時に確認できます（あくまで概算です）。
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <fieldset className="space-y-3">
          <legend className="font-medium text-text mb-2">タイプ</legend>
          {houseTypes.map((t) => (
            <label
              key={t.id}
              htmlFor={`${id}-${t.id}`}
              className={`block rounded-xl border p-4 cursor-pointer transition-colors ${
                typeId === t.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  id={`${id}-${t.id}`}
                  type="radio"
                  name={`${id}-type`}
                  value={t.id}
                  checked={typeId === t.id}
                  onChange={(e) => {
                    setTypeId(e.target.value);
                    const next = houseTypes.find((h) => h.id === e.target.value);
                    if (next) setTsubo(next.baseSizeTsubo);
                  }}
                  className="w-5 h-5 accent-primary"
                />
                <span className="font-serif font-bold text-primary">{t.name}</span>
                <span className="ml-auto text-xs text-text-muted">
                  {formatYen(t.basePrice)}〜
                </span>
              </span>
              <span className="block text-sm text-text-muted mt-2 pl-8">
                {t.description}
              </span>
            </label>
          ))}
        </fieldset>

        <div className="space-y-6">
          <div>
            <label
              htmlFor={`${id}-tsubo`}
              className="font-medium text-text mb-2 flex justify-between items-baseline"
            >
              <span>広さ</span>
              <span className="text-sm font-en font-bold text-primary">
                {tsubo}坪 ({Math.round(tsubo * 3.31)}㎡)
              </span>
            </label>
            <input
              id={`${id}-tsubo`}
              type="range"
              min={minTsubo}
              max={maxTsubo}
              step={1}
              value={tsubo}
              onChange={(e) => setTsubo(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-full accent-cta"
              aria-valuemin={minTsubo}
              aria-valuemax={maxTsubo}
              aria-valuenow={tsubo}
              aria-valuetext={`${tsubo}坪`}
            />
            <p className="flex justify-between text-xs text-text-muted mt-2">
              <span>{minTsubo}坪</span>
              <span>{maxTsubo}坪</span>
            </p>
          </div>

          <div
            className="rounded-xl bg-primary text-white p-6 text-center"
            aria-live="polite"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">
              Estimated Price
            </p>
            <p className="font-serif text-4xl md:text-5xl font-bold tabular-nums">
              {formatYen(price)}
              <span className="text-base font-normal align-middle">〜</span>
            </p>
            <p className="text-xs text-white/70 mt-3">
              ※ 仕様・オプション・施工地により価格は変動します。詳細は資料請求にてご確認ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
