"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const useCaseOptions = [
  "ガレージ（車）",
  "ガレージ（バイク）",
  "ガレージ（その他）",
  "ガレージハウス（住居兼用）",
  "住宅",
  "別荘",
  "自宅とは別の空間（書斎など）",
  "事務所・オフィス",
  "店舗",
  "その他",
] as const;

const schema = z.object({
  name: z.string().min(1, "お名前を入力してください").max(80),
  furigana: z.string().max(80).optional(),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません"),
  postalCode: z
    .string()
    .regex(/^\d{3}-?\d{4}$|^$/, "郵便番号は7桁（例：123-4567）で入力してください")
    .optional(),
  prefecture: z.string().min(1, "都道府県を入力してください").max(20),
  address: z.string().min(1, "市区町村・番地・建物名を入力してください").max(200),
  tel: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(/^[\d\-+() ]+$/, "電話番号の形式が正しくありません"),
  age: z.string().max(10).optional(),
  useCases: z.array(z.string()).min(1, "ご利用用途を1つ以上選択してください"),
  message: z.string().max(2000).optional(),
  consent: z.literal<true>(true),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const baseId = useId();
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { useCases: [], consent: undefined as unknown as true },
  });

  const onPostalBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^\d]/g, "");
    if (v.length !== 7) return;
    try {
      // Fetch directly from yubinbango-data (the same dataset yubinbango-core2 uses).
      const prefix = v.slice(0, 3);
      const res = await fetch(
        `https://yubinbango.github.io/yubinbango-data/data/${prefix}.js`,
        { mode: "cors" },
      );
      if (!res.ok) return;
      const text = await res.text();
      // Format: $yubin({"1234567":[1,"市区町村","町名"], ...})
      const jsonStr = text.replace(/^\$yubin\(/, "").replace(/\)\s*;?\s*$/, "");
      const data = JSON.parse(jsonStr) as Record<string, [number, string, string]>;
      const entry = data[v];
      if (!entry) return;
      const PREFS = [
        "", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
        "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
        "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
        "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
        "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
        "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
        "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
      ];
      const region = PREFS[entry[0]] ?? "";
      if (region) setValue("prefecture", region, { shouldValidate: true });
      const street = `${entry[1] ?? ""}${entry[2] ?? ""}`;
      if (street) setValue("address", street, { shouldValidate: true });
    } catch {
      /* graceful fallback - manual entry */
    }
  };

  const onSubmit = async () => {
    setSubmitState("loading");
    // Static-export build: no server-side endpoint. Show success after a short
    // delay so the UX matches a real submission. Hook this up to Formspree /
    // Resend / a CRM webhook when wiring up the backend.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitState("success");
  };

  if (submitState === "success") {
    return (
      <section
        id="contact"
        className="py-20 md:py-28 bg-base"
        aria-labelledby="contact-heading"
      >
        <Container size="prose">
          <div
            className="rounded-2xl bg-surface border border-border p-10 text-center"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 size={56} className="text-primary mx-auto mb-6" aria-hidden="true" />
            <h2 id="contact-heading" className="font-serif text-primary text-2xl md:text-3xl mb-4">
              ご請求ありがとうございました
            </h2>
            <p className="text-text-muted leading-relaxed">
              お送りいただいた内容を確認の上、担当よりご連絡いたします。
              <br />
              ガイドブックは数日以内に発送いたします。
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-base"
      aria-labelledby="contact-heading"
    >
      <Container size="prose">
        <SectionHeading
          eyebrow="Free Brochure"
          title={
            <span id="contact-heading">無料で「夢の隠れ家計画ガイドブック」を取り寄せる</span>
          }
          lead={
            <>
              ご記入いただいた情報をもとに、資料を無料でお届けします。
              <strong className="text-primary">訪問営業・電話営業は一切いたしません。</strong>
            </>
          }
        />

        {submitState === "error" && (
          <div
            role="alert"
            className="mb-8 rounded-xl bg-cta/8 border border-cta/30 p-4 flex gap-3 text-cta"
          >
            <AlertCircle size={20} aria-hidden="true" />
            <p className="text-sm leading-relaxed">
              送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 bg-surface border border-border rounded-2xl p-6 md:p-10"
        >
          <Field
            id={`${baseId}-name`}
            label="お名前"
            required
            error={errors.name?.message}
          >
            <input
              id={`${baseId}-name`}
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.name}
              {...register("name")}
              className={inputCls(!!errors.name)}
            />
          </Field>

          <Field id={`${baseId}-furigana`} label="フリガナ">
            <input
              id={`${baseId}-furigana`}
              type="text"
              autoComplete="off"
              {...register("furigana")}
              className={inputCls(false)}
            />
          </Field>

          <Field
            id={`${baseId}-email`}
            label="メールアドレス"
            required
            error={errors.email?.message}
          >
            <input
              id={`${baseId}-email`}
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              {...register("email")}
              className={inputCls(!!errors.email)}
            />
          </Field>

          <Field
            id={`${baseId}-postal`}
            label="郵便番号"
            hint="例：123-4567（入力後、住所が自動入力されます）"
            error={errors.postalCode?.message}
          >
            <input
              id={`${baseId}-postal`}
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              maxLength={8}
              placeholder="123-4567"
              aria-invalid={!!errors.postalCode}
              {...register("postalCode")}
              onBlur={onPostalBlur}
              className={inputCls(!!errors.postalCode)}
            />
          </Field>

          <Field
            id={`${baseId}-prefecture`}
            label="都道府県"
            required
            error={errors.prefecture?.message}
          >
            <input
              id={`${baseId}-prefecture`}
              type="text"
              autoComplete="address-level1"
              aria-required="true"
              aria-invalid={!!errors.prefecture}
              {...register("prefecture")}
              className={inputCls(!!errors.prefecture)}
            />
          </Field>

          <Field
            id={`${baseId}-address`}
            label="ご住所（市区町村・番地・建物名）"
            required
            error={errors.address?.message}
          >
            <input
              id={`${baseId}-address`}
              type="text"
              autoComplete="street-address"
              aria-required="true"
              aria-invalid={!!errors.address}
              {...register("address")}
              className={inputCls(!!errors.address)}
            />
          </Field>

          <Field
            id={`${baseId}-tel`}
            label="電話番号"
            required
            error={errors.tel?.message}
          >
            <input
              id={`${baseId}-tel`}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              aria-required="true"
              aria-invalid={!!errors.tel}
              {...register("tel")}
              className={inputCls(!!errors.tel)}
            />
          </Field>

          <Field id={`${baseId}-age`} label="年齢">
            <input
              id={`${baseId}-age`}
              type="text"
              inputMode="numeric"
              autoComplete="off"
              {...register("age")}
              className={inputCls(false)}
            />
          </Field>

          <fieldset>
            <legend className="block font-medium text-text mb-2">
              ご利用用途
              <span className="text-cta ml-2 text-sm" aria-hidden="true">
                ＊
              </span>
              <span className="sr-only">必須</span>
              <span className="text-xs text-text-muted ml-2">（複数選択可・1つ以上必須）</span>
            </legend>
            <ul className="grid sm:grid-cols-2 gap-2" role="list">
              {useCaseOptions.map((opt, i) => (
                <li key={opt}>
                  <label
                    htmlFor={`${baseId}-use-${i}`}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg border border-border hover:border-primary/40 cursor-pointer min-h-[44px]"
                  >
                    <input
                      id={`${baseId}-use-${i}`}
                      type="checkbox"
                      value={opt}
                      {...register("useCases")}
                      className="w-5 h-5 accent-primary"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                </li>
              ))}
            </ul>
            {errors.useCases && (
              <p
                role="alert"
                aria-live="polite"
                className="mt-2 text-sm text-cta flex gap-2 items-center"
              >
                <AlertCircle size={14} aria-hidden="true" />
                {errors.useCases.message as string}
              </p>
            )}
          </fieldset>

          <Field id={`${baseId}-message`} label="ご質問・ご要望">
            <textarea
              id={`${baseId}-message`}
              rows={5}
              {...register("message")}
              className={`${inputCls(false)} resize-y`}
            />
          </Field>

          <div className="rounded-xl bg-base p-5 border border-border space-y-3 text-sm text-text-muted leading-relaxed">
            <p>
              ご記入いただいた個人情報は、メールマガジン・ご質問対応以外の目的では使用しません。
              必要範囲で販売代理店と共有する場合があります。詳細は
              <a href="/privacy" className="text-primary underline">
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
            <p className="font-medium text-primary">
              訪問営業・電話営業は一切いたしません。
            </p>
            <label
              htmlFor={`${baseId}-consent`}
              className="flex items-start gap-3 mt-2 cursor-pointer"
            >
              <input
                id={`${baseId}-consent`}
                type="checkbox"
                {...register("consent")}
                aria-required="true"
                aria-invalid={!!errors.consent}
                className="w-5 h-5 mt-1 accent-primary"
              />
              <span>
                上記に同意します
                <span className="text-cta ml-1" aria-hidden="true">＊</span>
              </span>
            </label>
            {errors.consent && (
              <p role="alert" className="text-sm text-cta flex gap-2 items-center">
                <AlertCircle size={14} aria-hidden="true" />
                同意の上で送信してください。
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitState === "loading"}
            className="cta-wood text-white font-bold rounded-xl w-full px-8 py-5 text-lg shadow-card disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 min-h-[56px]"
          >
            {isSubmitting || submitState === "loading" ? (
              <>
                <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                送信中…
              </>
            ) : (
              <>無料でガイドブックを取り寄せる</>
            )}
          </button>
        </form>
      </Container>
    </section>
  );
}

function inputCls(hasError: boolean): string {
  return [
    "w-full px-4 py-3 rounded-xl bg-base border text-text",
    "focus:outline-none focus:ring-3 focus:ring-accent/40 focus:border-accent",
    "min-h-[48px]",
    hasError ? "border-cta/60" : "border-border",
  ].join(" ");
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, required, hint, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-text mb-2">
        {label}
        {required && (
          <>
            <span className="text-cta ml-2" aria-hidden="true">＊</span>
            <span className="sr-only">必須</span>
          </>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-xs text-text-muted">{hint}</p>
      )}
      {error && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-1.5 text-sm text-cta flex gap-2 items-center"
        >
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
