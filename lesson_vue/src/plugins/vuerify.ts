import { createVuetify } from "vuetify";
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// vuerifyのcomponentsとdirectivesを全て読み込む
// この書き方だと未使用のcomponentsとdirectivesも読み込まれてしまうため、tree - shakingを行った方がいい。
// const vuerify = createVuetify({
//   components,
//   directives,
// })

// カラーテーマのカスタマイズ。colorのpropsに新たに指定できる。
const vuetify = createVuetify({
    // theme: {
    //   defaultTheme: 'light',
    //   themes: {
    //     light: {
    //       dark: false,
    //       colors: {
    //         primary: '#1976D2',
    //         brand: '#6200EE',
    //       },
    //     },
    //     dark: {
    //       dark: true,
    //       colors: {
    //         primary: '#90CAF9',  // ダーク時は薄めの青
    //         brand: '#BB86FC',    // ダーク時は薄い紫
    //       },
    //     },
    //   },
    // },
  })

export default vuetify
