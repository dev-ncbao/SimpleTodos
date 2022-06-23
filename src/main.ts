import { createApp } from 'vue'
import router from './router'

import App from '@/App.vue'
import LayoutDefaultDynamic from '@/components/layouts/LayoutDefault/LayoutDefaultDynamic.vue'
import LayoutFullScreenDynamic from '@/components/layouts/LayoutFullScreen/LayoutFullScreenDynamic.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('LayoutDefaultDynamic', LayoutDefaultDynamic)
app.component('LayoutFullScreenDynamic', LayoutFullScreenDynamic)
