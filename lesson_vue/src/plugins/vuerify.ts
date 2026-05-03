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

const vuerify = createVuetify()

export default vuerify
