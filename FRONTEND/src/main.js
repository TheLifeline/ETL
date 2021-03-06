import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Uploader from 'simple-uploader.js'

Vue.config.productionTip = false
// 设置上传对象
var uploader = new Uploader({
  testChunks: false
})
// 配置请求的根路径
axios.defaults.baseURL = window.axiosBaseUrl
axios.interceptors.request.use(
  config => {
    if (localStorage.JWT_TOKEN) {
      config.headers.Authorization = `JWT ${localStorage.JWT_TOKEN}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
Vue.prototype.$http = axios
Vue.prototype.$uploader = uploader

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
