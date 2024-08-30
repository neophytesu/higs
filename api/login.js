import request from '@/utils/request.js';

const rootUrl =''

// 获取手机相关用户
export const getUser = (phoneNumber) => {
	return request(rootUrl+``, 'POST')
}

// 根据用户id返回就诊卡绑定状态和人脸识别状态
export const getStates = (userId) => {
	return request(rootUrl+``, 'GET')
}

// 判断就诊卡号是否存在
export const getCard = (cardNumber) => {
	return request(rootUrl+``, 'GET')
}

// 根据手机号绑定就诊卡号
export const bindCard = (phoneNumber,cardNumber) => {
	return request(rootUrl+``, 'POST')
}

// 注册就诊卡
export const registerCard = (phoneNumber,name,identity) => {
	return request(rootUrl+``, 'POST')
}

// 注册人脸识别
export const registerFace = () => {
	return request(rootUrl+``, 'POST')
}