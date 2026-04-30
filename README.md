# おやじの隠れ家 — モダンリニューアル

純国産無垢材の高級木材キットハウス／キットガレージ「おやじの隠れ家」のランディングページを、**Next.js 15 (16.x) + Tailwind CSS v4** で全面リデザイン・再構築したリポジトリです。

WCAG 2.2 AA 準拠、シニアフレンドリーな大きめタイポグラフィ、`prefers-reduced-motion` 完全対応、キーボードのみで完結する操作性を最優先しています。

---

## セットアップ

```bash
pnpm install
pnpm dev    # http://localhost:3000
```

その他のコマンド:

```bash
pnpm build      # 本番ビルド
pnpm start      # 本番ビルドの起動
pnpm lint       # ESLint
```

---

## ディレクトリ構成

```
.
├─ app/
│  ├─ layout.tsx         # ルートレイアウト・next/font・OGP・viewport
│  ├─ page.tsx           # トップ（14 セクションを順に配置）
│  ├─ globals.css        # @theme トークン・skip link・装飾
│  ├─ privacy/page.tsx   # プライバシーポリシー
│  ├─ gallery/page.tsx   # 完成品ギャラリー（ライトボックス付き）
│  ├─ api/contact/route.ts  # フォーム受信スタブ
│  ├─ robots.ts          # /robots.txt
│  └─ sitemap.ts         # /sitemap.xml
├─ components/
│  ├─ layout/            # SkipLink, Header, Footer
│  ├─ sections/          # 14 セクション
│  ├─ interactive/       # PriceSimulator, JapanMap, Itakura3D, GalleryGrid
│  └─ ui/                # Container, Button, SectionHeading
├─ lib/                  # stories, pricing, agents, content, utils
└─ public/
   ├─ og-image.svg
   └─ images/oyaji-original/  ← 仮置き画像置き場（後述）
```

---

## 設計判断のサマリ

| 項目 | 採用 | 理由 |
|---|---|---|
| 配色 | 杉色 #2D4A3E / 檜色 #C7884A / 朱 #B8460E / 和紙 #FAF7F2 | ジャパニーズモダン。木と空気のトーンを反映。コントラスト 4.5:1 以上を確保 |
| 見出しフォント | Noto Serif JP (600/700) | 和の格と「本物」の質感 |
| 本文フォント | Noto Sans JP (400/500) | 可読性最優先。Latin プリロードなし／display swap で初期表示遅延を抑制 |
| 基本フォントサイズ | 17px / line-height 1.9 | 50〜70 代のシニアユーザー前提 |
| タップターゲット | 全インタラクティブ要素を最低 44×44px | iOS HIG/WCAG 2.5.5 |
| アニメーション | framer-motion 不採用、CSS only | バンドル削減 + `prefers-reduced-motion` 全停止が容易 |
| 多言語 | 日本語のみ（v1） | i18n 対応はバックログ（後述） |
| 画像 | プレースホルダー / SVG 中心 | 著作権安全。本番投入前に施工写真と差し替え |

---

## 元サイトから変更した UI/UX 判断

1. **テーブルレイアウトを廃止**: 全面レスポンシブな CSS Grid + Flexbox に再構築。
2. **タップ／フォーカス領域の拡大**: ナビ・CTA・チェックボックス・ラジオを 44px+。
3. **オーナー事例をタブパネル化**: 5 件の事例を `role="tablist"` 化し、矢印キー／Home／End で巡回可能。スクリーンリーダーでも読み上げ順序が破綻しない。
4. **比較表のモバイル縦積み化**: テーブルを mobile では `<dl>` に置き換え、横スクロールを廃止。
5. **価格シミュレーターを追加**: タイプ × 坪数で概算価格を即座にフィードバック。
6. **板倉工法 3D**: react-three-fiber の OrbitControls + autoRotate。`prefers-reduced-motion` 時は静的 SVG にフォールバック。
7. **施工エリアの抽象 SVG マップ**: 各地方ごとに代理店数を表示。フォーカス／ホバー両対応、キーボードのみで全要素を巡回可能。
8. **Skip Link / Landmark**: `header / nav / main / footer / section[aria-labelledby]` を厳格適用。
9. **資料請求フォーム**: zod スキーマでクライアント検証、`autocomplete` 属性、yubinbango 互換 API（自前 fetch）で郵便番号→住所自動入力、訪問・電話営業しない旨の明示。
10. **CTA の「木目」マイクロインタラクション**: ホバー時に背景がスライド。reduced-motion 時は無効化。

---

## 受け入れチェックリスト

- [x] Next.js ビルド成功（`pnpm build`）
- [x] ESLint 違反 0
- [x] 全ルート（`/`, `/privacy`, `/gallery`, `/robots.txt`, `/sitemap.xml`）200 OK
- [x] フォーム POST `/api/contact` がスタブで正しく `{ ok: true }` を返却
- [x] H1 はページに 1 つ／見出し階層を厳守
- [x] `<table>` には `<caption>` と `scope` 属性
- [x] フォーム入力に `autocomplete` 属性・`aria-required` / `aria-invalid` を付与
- [x] フォーカスリング常時可視（`:focus-visible` で 3px outline）
- [x] `prefers-reduced-motion: reduce` で全アニメーション停止
- [x] フォントサイズ 200% で破綻しないことを CSS clamp で担保
- [x] OGP / Twitter Card / favicon メタ設定
- [x] sitemap.xml / robots.txt 自動生成（Next 標準の `app/sitemap.ts` を使用）

---

## A11y 検証手順（ローカル）

`@axe-core/cli` は含めていますが、Codespaces 等の環境で chromedriver が動かない場合は以下のいずれかでチェックしてください：

```bash
# 案1: ブラウザの DevTools > Lighthouse を Mobile プリセットで実行
# 案2: axe DevTools 拡張機能を Chrome / Firefox で実行
# 案3: chromedriver が動く環境で
pnpm dlx @axe-core/cli http://localhost:3000/ --exit
```

主要な観点:
- キーボードのみで全機能が完結する（Tab / Shift+Tab / Enter / Space / Esc / 矢印キー）
- VoiceOver / NVDA でランドマークが読み上げられる
- フォントサイズ 200% でレイアウトが崩れない
- iPhone SE (375px) で横スクロール無し

---

## 画像の取り扱い（重要）

`public/images/oyaji-original/` は **仮置き用ディレクトリ**です。本リポジトリには初期状態では実画像を含めていません。本番投入前に必ず以下のいずれかを行ってください：

1. **権利確認済みの施工事例写真を配置** （推奨）
2. または、Unsplash 等のロイヤリティフリー素材で差し替え（クレジット表記必須）

ヒーローセクションの SVG イラスト・ギャラリーのプレースホルダー・OG 画像は意図的にイラスト化／装飾化しており、そのままでも公開は可能ですが、ブランド感を高めるために実写との差し替えを強く推奨します。

差し替え対象ファイル:
- `app/page.tsx` 経由で `components/sections/Hero.tsx` 内の SVG ブロック
- `components/interactive/GalleryGrid.tsx` のグラデーション部分
- `public/og-image.svg`

---

## バックログ（未実装 / 加点項目の続き）

| 項目 | 状態 | 補足 |
|---|---|---|
| 多言語化 (ja / en) | 未実装 | `next-intl` を依存に追加済み。実装は `app/[locale]/` への再配置 + `messages/{ja,en}.json` 作成が必要 |
| ダークモード | 未実装 | `prefers-color-scheme: dark` を尊重するトークン分岐は globals.css に追加可能 |
| 実フォーム送信（メール／CRM） | 未実装 | 現在 `app/api/contact/route.ts` は console.log のみ。Resend 等の API キー追加で本番運用可 |
| 施工エリア地図の正確性 | 抽象表現 | 現在は地域ごとの集約バブル。要件に応じて GeoJSON ベースの正確な日本地図に差し替え可能 |
| Lighthouse スクリーンショット | 未取得 | Codespaces で chromedriver が動かないため、手動実行を推奨 |

---

## デプロイ

- **Vercel**: そのまま `vercel deploy` で動作。`@react-three/fiber` は Edge Runtime を要求しないので Node 既定で OK。
- **Cloudflare Pages**: `next-on-pages` 経由で対応可能。`/api/contact` は Cloudflare Functions に変換される。
- 環境変数: 現状なし。本番でメール送信を行う場合は `.env.local` に `RESEND_API_KEY` 等を追加し、`app/api/contact/route.ts` を拡張してください。

---

## ライセンス・著作権

- コード: 本リポジトリのアプリケーションコードは内部利用前提。
- ブランド／会社情報: 株式会社フレックス唐津（おやじの隠れ家）。
- 画像: `public/images/oyaji-original/` は仮置き想定。**本番では権利確認済みの素材に差し替えてください**。

---

## クレジット

- Co-Authored-By: Claude Opus 4.7 (Claude Code)
- Stack: Next.js 16, React 19, Tailwind CSS 4, react-three-fiber, react-hook-form, zod, lucide-react
