<script setup lang="ts">
import { ref } from 'vue'
import type { VForm } from 'vuetify/components'

const name = ref('')
const password = ref('')

const selectedColor = ref('')
const colors = ['red', 'green', 'blue', 'yellow', 'purple']

interface User {
  id: number
  name: string
  email: string
  age: number
}

const selectedUser = ref<User | null>(null)

const users: User[] = [
  { id: 1, name: '山田太郎', email: 'yamada@example.com', age: 20 },
  { id: 2, name: '山田花子', email: 'yamada@example.com', age: 21 },
  { id: 3, name: '山田次郎', email: 'yamada@example.com', age: 22 },
]

const form = ref<InstanceType<typeof VForm>>()
const isValid = ref(false)

const username = ref('')
const email = ref('')
const age = ref<number | null>(null)

// バリデーションルール
const requiredRule = (v: string) => !!v || '必須項目です'
const emailRule = (v: string) => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください'
const ageRule = (v: number) => (v >= 0 && v <= 120) || '0〜120の値を入力してください'

async function handleSubmit() {
  const result = await form.value?.validate()
  if (result?.valid) {
    alert(`送信: ${username.value}, ${email.value}`)
  }
}

function handleReset() {
  form.value?.reset()
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- 基本 -->
        <!-- v-modelでリアクティブな変数と紐づける。 -->
        <v-text-field
          v-model="name"
          label="名前"
          placeholder="山田 太郎"
          variant="outlined"
          clearable
        />

        <!-- パスワード -->
        <v-text-field
          v-model="password"
          label="パスワード"
          type="password"
          variant="outlined"
          prepend-inner-icon="mdi-lock"
        />

        <p>入力値: {{ name }}</p>
      </v-container>

      <v-container>
        <!-- options => items、v-model => 選択されているリアクティブ変数 -->
        <v-select v-model="selectedColor" :items="colors" label="色を選択" variant="outlined" />

        <!-- オブジェクトの場合はitem-titleとitem-valueを指定する。 -->
        <!-- item-title => 表示するプロパティ名 -->
        <!-- item-value => 選択された値のプロパティ名 -->
        <v-select
          v-model="selectedUser"
          :items="users"
          item-title="name"
          item-value="id"
          label="ユーザーを選択"
          variant="outlined"
        />
        <p>
          選択されているcolor : {{ selectedColor }} ： 選択されているユーザー :
          {{ selectedUser }}
        </p>
      </v-container>

      <v-container>
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="username"
            label="ユーザー名"
            :rules="[requiredRule]"
            variant="outlined"
          />

          <v-text-field
            v-model="email"
            label="メールアドレス"
            :rules="[requiredRule, emailRule]"
            variant="outlined"
          />

          <v-text-field
            v-model="age"
            label="年齢"
            type="number"
            :rules="[ageRule]"
            variant="outlined"
          />

          <div class="d-flex ga-2">
            <v-btn color="primary" :disabled="!isValid" @click="handleSubmit">送信</v-btn>
            <v-btn variant="outlined" @click="handleReset">リセット</v-btn>
          </div>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>
