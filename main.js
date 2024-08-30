import App from './App'
import store from './store/index.js'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

//接口

// import {api,rootUrl} from '@/api/api.js' // API 链接
// import {https} from '@/api/http.js' // 请求方式中间件

export function createApp() {
	const app = createSSRApp(App)
	app.use(store)

	// app.config.globalProperties.$api = api;
	// app.config.globalProperties.$rootUrl = rootUrl;
	// app.config.globalProperties.$http = https;


	return {
		app
	}
}

// #endif