import request from '@/utils/request.js';

const rootUrl =''

//对话AI
export const getAI = (message) => {
	return request(rootUrl+`124.220.12.57:5005/webhooks/rest/webhook`, 'POST')
}