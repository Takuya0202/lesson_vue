# Vue / Nuxt 学習リポジトリ — Claudeコンテキスト

## プロジェクト概要

Vue と Nuxt を未経験から学ぶための個人学習リポジトリ。

- メインコード: `lesson_vue/` ディレクトリ (Vite + Vue 3 + TypeScript)
- パッケージマネージャ: pnpm

## ユーザーバックグラウンド

| 項目 | レベル |
|------|--------|
| React / Next.js | 一定の理解あり |
| SPA / CSR / SSR の概念 | 理解済み（説明不要） |
| Vue | 未経験 → 学習中 |
| Nuxt | 未経験 → Vue 習得後に着手予定 |

**方針**: React と比較しながら教えると理解が速い。Vue 固有の概念を重点的に解説する。

## AIエージェントの役割

- **ステップアップ式**でロードマップを展開し、1ステップずつ教える
- 学習済み内容は `AGENT.md` および本ファイル（`CLAUDE.md`）の「学習進捗」セクションに随時記録する
- 質問には**具体的なコード例**を添えて答える
- 最新のベストプラクティスを使う（後述）

## サンプルコードの方針

- **ファイルの自動生成は行わない** — コードはチャットで提示し、ユーザーが自分で書く（学習効果のため）
- サンプルは `App.vue` を上書きせず、**`src/components/` に専用ファイルとして作成**する
- ファイル命名規則: `Step{フェーズ}_{ステップ番号}_{トピック名}.vue`（例: `Step1_1_TemplateSyntax.vue`）
- `App.vue` では作成したコンポーネントを import して表示する

## コーディング規約（最新 Vue / Nuxt ベストプラクティス）

### Vue

- **Composition API** を使用する（Options API は使わない）
- `<script setup>` 構文を使用する
- TypeScript を使用する
- `ref()` / `reactive()` / `computed()` / `watch()` / `watchEffect()` を適切に使い分ける

```vue
<!-- ✅ 推奨 -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>

<!-- ❌ 非推奨（Options API） -->
<script>
export default {
  data() { return { count: 0 } }
}
</script>
```

### Nuxt（着手時に適用）

- **Nuxt 3** を使用（Nuxt 2 は扱わない）
- Auto-imports を活用する
- `useAsyncData` / `useFetch` でデータフェッチ
- Pinia を状態管理に使用

---

## 学習ロードマップ

> 学習の進行順序: Phase 1 → Phase 1.5 → **実践 A（Vue 総復習）** → Phase 2 → **実践 B（Nuxt 総復習）**

### Phase 1: Vue 基礎

| # | トピック | ステータス |
|---|---------|---------|
| 1-1 | テンプレート構文（`v-bind`, `v-on`, `v-if`, `v-for`） | ✅ 完了 |
| 1-2 | リアクティビティ基礎（`ref`, `reactive`） | ✅ 完了 |
| 1-3 | `computed` / `watch` / `watchEffect` | ✅ 完了 |
| 1-4 | コンポーネント分割・`props` / `emits` | ✅ 完了 |
| 1-5 | スロット（`slot` / `v-slot`） | ✅ 完了 |
| 1-6 | ライフサイクルフック（`onMounted` など） | ✅ 完了 |
| 1-7 | `provide` / `inject` | ✅ 完了 |
| 1-8 | Vue Router 4（SPA ルーティング） | ✅ 完了 |
| 1-9 | Pinia（状態管理） | ✅ 完了 |
| 1-10 | Composables（ロジック再利用） | ✅ 完了 |

### Phase 1.5A: UI ライブラリ — shadcn-vue

| # | トピック | ステータス |
|---|---------|---------|
| 1.5A-1 | shadcn-vue セットアップ（Tailwind CSS + Radix Vue） | ⬜ 未着手 |
| 1.5A-2 | 基本コンポーネント（Button, Card, Badge, Dialog） | ⬜ 未着手 |
| 1.5A-3 | フォーム系コンポーネント（Input, Select, Checkbox, Form バリデーション） | ⬜ 未着手 |
| 1.5A-4 | データ表示系（Table, Tabs, Accordion） | ⬜ 未着手 |
| 1.5A-5 | テーマカスタマイズ・ダークモード | ⬜ 未着手 |

### Phase 1.5B: UI ライブラリ — Vuetify

| # | トピック | ステータス |
|---|---------|---------|
| 1.5B-1 | Vuetify 3 セットアップ（プラグイン登録・SASS 設定） | ✅ 完了 |
| 1.5B-2 | レイアウト系（`v-app`, `v-container`, `v-row`, `v-col` グリッド） | ✅ 完了 |
| 1.5B-3 | 基本コンポーネント（`v-btn`, `v-card`, `v-chip`, `v-dialog`） | ⬜ 未着手 |
| 1.5B-4 | フォーム系（`v-text-field`, `v-select`, `v-form` バリデーション） | ⬜ 未着手 |
| 1.5B-5 | データ表示系（`v-data-table`, `v-tabs`, `v-expansion-panels`） | ⬜ 未着手 |
| 1.5B-6 | テーマカスタマイズ・ダークモード・Blueprint | ⬜ 未着手 |

### 実践 A: Vue SPA 総復習（Phase 1.5 完了後・Nuxt 着手前）

> ここで Vue の知識を定着させてから Nuxt に進む。

| 課題 | ステータス |
|------|---------|
| Vue SPA — ショッピングカート | ⬜ 未着手 |

### Phase 2: Nuxt 3

| # | トピック | ステータス |
|---|---------|---------|
| 2-1 | Nuxt 3 セットアップ・ディレクトリ構造 | ⬜ 未着手 |
| 2-2 | ファイルベースルーティング | ⬜ 未着手 |
| 2-3 | Auto-imports | ⬜ 未着手 |
| 2-4 | `useFetch` / `useAsyncData` でのデータ取得 | ⬜ 未着手 |
| 2-5 | レイアウト（`layouts/`） | ⬜ 未着手 |
| 2-6 | ミドルウェア | ⬜ 未着手 |
| 2-7 | サーバーサイド API（`server/api/`） | ⬜ 未着手 |
| 2-8 | Pinia + Nuxt 統合 | ⬜ 未着手 |
| 2-9 | SSR / SSG / ハイブリッドレンダリング | ⬜ 未着手 |
| 2-10 | デプロイ（Vercel / Netlify） | ⬜ 未着手 |

### 実践 B: Nuxt フルスタック総復習（Phase 2 完了後）

> ここで Nuxt の知識を定着させる。

| 課題 | ステータス |
|------|---------|
| Nuxt フルスタックアプリ — レシピサイト | ⬜ 未着手 |

---

## 実践課題 詳細

> コード提示なし。学んだ知識を組み合わせて自力で実装する。詰まったら質問OK。

#### 実践 A — Vue SPA ショッピングカート（Phase 1 + 1.5 の総復習）

Phase 1・1.5 で学んだ内容をすべて使う SPA。

| 使用技術 | 実装箇所 |
|---------|---------|
| `ref` / `computed` / `watch` | 数量・合計金額の計算、検索フィルター |
| `v-for` / `v-if` | 商品一覧・カート一覧の描画、空カート表示 |
| `props` / `emits` | 商品カード→親へ「カートに追加」イベント通知 |
| `slots` | 共通レイアウトコンポーネント（ヘッダースロット等） |
| `onMounted` | 商品データの初期ロード |
| `provide` / `inject` | テーマ（ライト/ダーク）の全体共有 |
| Vue Router | `/products`・`/cart`・`/products/:id` のページ遷移 |
| Pinia（複数ストア） | 商品ストアとカートストアを分離 |
| Composables | `useFormatPrice`（価格フォーマット）、`useCart`（カート操作ロジック） |
| UI ライブラリ | Button・Card・Badge・Dialog・Form を使って UI を構築 |

**実装要件**
- 商品一覧ページ（`/products`）：カード表示、名前で絞り込み検索
- 商品詳細ページ（`/products/:id`）：詳細情報 + カートに追加
- カートページ（`/cart`）：数量変更・削除・合計金額表示
- ヘッダー：全ページ共通、カート点数バッジ、ダーク/ライト切り替え
- コンポーネントは最低5つに分割する

#### 実践 B — Nuxt フルスタックアプリ レシピサイト（Phase 2 の総復習）

Phase 2 で学んだ Nuxt 固有の機能をすべて使うアプリ。

| 使用技術 | 実装箇所 |
|---------|---------|
| ファイルベースルーティング | `pages/` 以下のページ自動生成 |
| Auto-imports | `ref`・`useFetch` などのインポート省略 |
| レイアウト | デフォルトレイアウト（ヘッダー・フッター）、管理画面用レイアウト |
| `useFetch` / `useAsyncData` | レシピ一覧・詳細のデータ取得 |
| サーバー API（`server/api/`） | レシピ CRUD の API エンドポイント |
| ミドルウェア | 管理ページへの認証ガード |
| Pinia + Nuxt 統合 | お気に入りレシピのグローバル管理 |
| SSR / SSG | 一覧は SSG、詳細は SSR でレンダリング |

**実装要件**
- レシピ一覧ページ（SSG）：カード一覧、カテゴリフィルター
- レシピ詳細ページ（SSR）：材料・手順表示、お気に入りボタン
- 管理ページ（認証ガード付き）：レシピの追加・編集・削除
- サーバー API でデータを返す（JSON ファイルや in-memory データで可）
- お気に入り数をヘッダーにバッジ表示（Pinia）

---

## 学習進捗ログ

> AIエージェントはユーザーが学習した内容をここに追記していく。

### 2026-04-20
- **1-1 テンプレート構文** 完了
  - `v-bind` / `v-on` の短縮記法（`:` / `@`）を理解
  - `v-if` / `v-else` / `v-for` の使い方
  - `key` 属性の重要性（React の `key` と同じ役割）
- **1-3 computed / watch / watchEffect** 完了
  - `computed` は `useMemo` 相当。依存配列不要で自動追跡、キャッシュされる
  - `watch` は特定の値を明示的に監視。変更前後の値を受け取れる
  - `watchEffect` は依存を自動追跡するが、現場では `watch` の方が多用される
  - マウント時だけ実行したい場合は `onMounted`（1-6）を使う
- **1-2 リアクティビティ基礎** 完了
  - `ref` はプリミティブ用。`script` 内は `.value` でアクセス、テンプレート内は不要
  - `reactive` はオブジェクト・配列用。`.value` 不要だが分割代入でリアクティビティが消える
  - Vue の `ref` は React の `useState` 相当（`useRef` とは別物）
  - 迷ったら `ref` に統一するスタイルもある

### 2026-04-22
- **1-4 コンポーネント分割・`props` / `emits`** 完了
  - `defineProps<T>()` で型安全に props を受け取る
  - 文字列以外の props（number, boolean, object）は `:` (v-bind) が必要
  - `defineEmits<T>()` で子→親のイベント通知を行う
  - 「何をするかは親が決め、いつ発火するかは子が決める」という役割分担
  - 関数を props で渡すことは技術的には可能だが、Vue では emit が正規の手段

### 2026-04-23
- **1-5 スロット（`slot` / `v-slot`）** 完了
  - デフォルトスロットと名前付きスロット（`#header` など）の役割を理解
  - scoped slot は「子がデータ、親が UI」を分離するための仕組みだと理解
  - `v-slot` で子から受け取った値（例: `user`, `index`）を親テンプレートで描画できる
  - 実務では DataTable / headless UI など、共通ロジックと画面ごとの見た目を分離したい場面で有効

### 2026-04-24
- **1-6 ライフサイクルフック（`onMounted` など）** 完了
  - `onMounted` は初回レンダリング完了後に1回実行される（React の `useEffect(..., [])` に近い）
  - 依存値の変化に追従する処理は `watch` / `watchEffect` が適切
  - `onUnmounted` はクリーンアップ用途（`setInterval`、イベントリスナー、購読の解除）
  - API 取得は `onMounted` で開始でき、必要なら `AbortController` で中断制御できる

### 2026-04-25
- **1-7 `provide` / `inject`** 完了
  - `provide` / `inject` は React の Context（Provider / `useContext`）に近いと理解
  - `Symbol` をキーにすると衝突しない一意キーになり安全に受け渡せると理解
  - `slot` は React の `children` と同じ役割で、親が渡した要素を子側で差し込むための仕組みだと理解
  - `<script setup>` では `export` できないため、共有する型やキーは通常の `<script>` または `.ts` へ分離する必要があると理解
  - 局所状態は `provide` / `inject`、アプリ横断状態は Pinia を使い分ける方針を理解
- **1-8 Vue Router 4（SPA ルーティング）** 完了
  - `createRouter` + `createWebHistory` でルーター作成、`.use(router)` でアプリに登録
  - `<RouterView />` は React の `<Outlet />` 相当。ルートに一致したコンポーネントの描画先
  - `<RouterLink>` は React の `<Link>` 相当。SPA 遷移を行う
  - `useRoute()` は「今どこにいるか」（params, query）、`useRouter()` は「どこへ行くか」（push, replace, back）
  - 同じルート内で param だけ変わる場合、コンポーネントは再マウントされないため `watch` で検知する（React の `useEffect(fn, [id])` と同じ）
  - `createWebHistory`（きれいな URL）と `createWebHashHistory`（`#` 付き URL）の2種類があり、実務では前者が主流
  - ページコンポーネントは `pages/` や `views/` に分離するのが実務の慣習。Nuxt では `pages/` に置くと自動でルート生成される
- **1-9 Pinia（状態管理）** 完了
  - Pinia は Zustand に非常に近い構造で、`defineStore` の Setup 記法なら中身は普通の Composition API
  - `ref` が state、`computed` が getter、関数が action に対応する
  - Setup 記法では TypeScript の型が自動推論されるため、別途型定義は不要
  - `storeToRefs()` はストアの state/getter をリアクティブに分割代入するときだけ必要。ドット記法（`store.count`）で使うなら不要
  - 同じストアを複数コンポーネントから使うと状態が自動で同期される
  - `provide/inject` は局所的な依存注入、Pinia はアプリ横断のグローバル状態管理と使い分ける

### 2026-05-02
- **1-10 Composables（ロジック再利用）** 完了
  - Composable は React のカスタムフック相当。`use〇〇` 命名で `src/composables/` に置く
  - `use〇〇` は命名規則ではなく設計パターン。「リアクティブな状態を内包する再利用ロジック」というシグナル
  - Composable はコンポーネントごとに独立した状態を持つ（グローバル共有は Pinia の責務）
  - `src/` 外のファイルは `tsconfig.app.json` の `include` 対象外になるため補完・型解決が効かない
  - `useFetch` で `onMounted` は不要。fetch は DOM 不要なので `setup()` 実行時に直接呼ぶ。`onMounted` を使うとコンポーネント外（Pinia ストアなど）から呼べなくなる
  - 役割の使い分け: props/emits（2階層）、provide/inject（3階層以上の橋渡し）、Composable（再利用ロジック）、Pinia（グローバル状態）

### 2026-05-03
- **1.5B-1 Vuetify 3 セットアップ** 完了
  - `pnpm add vuetify @mdi/font` で既存プロジェクトに後付けインストール（`pnpm create vuetify` は新規プロジェクト生成用）
  - `createVuetify()` で設定を作り、`main.ts` で `.use(vuetify)` 登録（Router / Pinia と同じプラグインパターン）
  - `<v-app>` はルートに必須。`<v-main>` は app-bar 等のレイアウトコンポーネントと連携して padding を自動計算する
  - `<v-container>` は MUI の `<Container>` 相当（最大幅 + 中央寄せ）。汎用 div ではない
  - `vite-plugin-vuetify` の `autoImport: true` で tree-shaking が有効になり、使用コンポーネントだけバンドルされる
  - 未登録のタグ（typo 含む）はエラーにならず、Web 標準のカスタム要素として素通りする（ハイフン付きタグは Custom Elements の仕様）
  - `.vue` ファイルの型解決には `vite-env.d.ts` の `declare module '*.vue'` が必要
- **1.5B-2 レイアウト系（`v-container`, `v-row`, `v-col` グリッド）** 完了
  - Vuetify は 12カラムグリッド。`v-col` の `cols` は 12分割のうち何カラム分かの絶対指定（比ではない）
  - `cols` 省略時は `flex: 1` で均等分割される
  - `v-row` は MUI の `<Grid container>`、`v-col` は `<Grid item>` に相当するが、別タグに分かれている
  - レスポンシブは `cols="12" md="4"` のように prop で指定。分母は常に12で、ブレークポイントごとにカラム数を切り替える
  - `v-row` の `justify`（水平）/ `align`（垂直）/ `no-gutters`（余白除去）で配置制御
  - `v-col` の `offset`（左余白）/ `order`（表示順）で細かいレイアウト調整が可能
  - ユーティリティクラスは `{property}{direction}-{size}` 規則（`pa-4` = padding-all 16px）

---

## 参考リソース

- [Vue 3 公式ドキュメント](https://ja.vuejs.org/)
- [Nuxt 3 公式ドキュメント](https://nuxt.com/docs)
- [Pinia 公式ドキュメント](https://pinia.vuejs.org/)
- [Vue Router 4 公式ドキュメント](https://router.vuejs.org/)
