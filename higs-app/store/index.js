import { createStore } from 'vuex'

export default createStore ({
    state() {
		return{
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		phone: "",
		username: "",
		avatar:"",
		register:{
			index: 0,
			isFee: false
		}
		};
	},
    mutations: {
		//相当于同步的操作
		SET_PHONE(state, newPhone) {  
			state.phone = newPhone;  
		},  
		SET_USERNAME(state, newUsername) {  
		    state.username = newUsername;  
		},
		SET_REGISTER(state, register){
			state.register.index = register.index;
			state.register.isFee = register.isFee;
		}
	},
	getters: {  
	    // 创建一个 getter 来获取 phone 的值  
	    getRegister: (state) => {  
	      return state.register;  
	    },  
		
	  },
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
