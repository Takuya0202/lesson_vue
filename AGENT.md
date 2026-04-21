# Vue / Nuxt 学習リポジトリ — エージェントコンテキスト

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
- **ask モード優先**（agentモード不要）
- 学習済み内容は本ファイル（AGENT.md）の「学習進捗」セクションに随時記録する
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
- コンポーネント名は PascalCase
- ファイル名は PascalCase（例: `UserCard.vue`）

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
- Auto-imports を活用する（`ref`, `useFetch` などをimportなしで使用）
- `useAsyncData` / `useFetch` でデータフェッチ
- Pinia を状態管理に使用
- `composables/` にロジックを切り出す

---

## 学習ロードマップ

### Phase 1: Vue 基礎

| # | トピック | ステータス |
|---|---------|---------|
| 1-1 | テンプレート構文（`v-bind`, `v-on`, `v-if`, `v-for`） | ✅ 完了 |
| 1-2 | リアクティビティ基礎（`ref`, `reactive`） | ✅ 完了 |
| 1-3 | `computed` / `watch` / `watchEffect` | ⬜ 未着手 |
| 1-4 | コンポーネント分割・`props` / `emits` | ⬜ 未着手 |
| 1-5 | スロット（`slot` / `v-slot`） | ⬜ 未着手 |
| 1-6 | ライフサイクルフック（`onMounted` など） | ⬜ 未着手 |
| 1-7 | `provide` / `inject` | ⬜ 未着手 |
| 1-8 | Vue Router 4（SPA ルーティング） | ⬜ 未着手 |
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

<!-- 例:
### 2026-04-20
- **1-1 テンプレート構文** 完了
  - `v-bind`, `v-on` の短縮記法（`:`, `@`）を理解
  - `v-if` / `v-else` / `v-for` の使い方
  - `key` 属性の重要性（React の `key` と同じ役割）
-->

### 2026-04-20
- **1-1 テンプレート構文** 完了
  - `v-bind` / `v-on` の短縮記法（`:` / `@`）を理解
  - `v-if` / `v-else` / `v-for` の使い方
  - `key` 属性の重要性（React の `key` と同じ役割）
- **1-2 リアクティビティ基礎** 完了
  - `ref` はプリミティブ用。`script` 内は `.value` でアクセス、テンプレート内は不要
  - `reactive` はオブジェクト・配列用。`.value` 不要だが分割代入でリアクティビティが消える
  - Vue の `ref` は React の `useState` 相当（`useRef` とは別物）
  - 迷ったら `ref` に統一するスタイルもある

---

## 参考リソース

- [Vue 3 公式ドキュメント](https://ja.vuejs.org/)
- [Nuxt 3 公式ドキュメント](https://nuxt.com/docs)
- [Pinia 公式ドキュメント](https://pinia.vuejs.org/)
- [Vue Router 4 公式ドキュメント](https://router.vuejs.org/)
