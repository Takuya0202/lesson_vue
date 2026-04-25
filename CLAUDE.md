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
| 1-9 | Pinia（状態管理） | ⬜ 未着手 |
| 1-10 | Composables（ロジック再利用） | ⬜ 未着手 |

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

---

## 参考リソース

- [Vue 3 公式ドキュメント](https://ja.vuejs.org/)
- [Nuxt 3 公式ドキュメント](https://nuxt.com/docs)
- [Pinia 公式ドキュメント](https://pinia.vuejs.org/)
- [Vue Router 4 公式ドキュメント](https://router.vuejs.org/)
