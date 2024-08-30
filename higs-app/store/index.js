import { createStore } from 'vuex'

export default createStore ({
    state() {
		return{
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		phone: "",
		username: ""
		};
	},
    mutations: {
		//相当于同步的操作
		SET_PHONE(state, newPhone) {  
			state.phone = newPhone;  
		},  
		SET_USERNAME(state, newUsername) {  
		    state.username = newUsername;  
		}
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
