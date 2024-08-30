//  弃用
// export function https(opts, data) {
// 	let httpDefaultOpts = {
// 		url: opts.url,
// 		data: data,
// 		method: opts.method,
// 		header: opts.method == 'get' ? {
// 			'X-Requested-With': 'XMLHttpRequest',
// 			"Accept": "application/json",
// 			"Content-Type": "application/json; charset=UTF-8"
// 		} : {
// 			'X-Requested-With': 'XMLHttpRequest',
// 			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// 		},
// 		dataType: 'json',
 
// 	}
// 	let token = uni.getStorageSync('token');
// 	if (token != undefined && token != null && token != '') {
// 		httpDefaultOpts.header.Authorization = 'Bearer ' + token;
// 	}
 
// 	let promise = new Promise(function(resolve, reject) {
// 		uni.request(httpDefaultOpts).then(
// 			(res) => {
// 				// console.log(res, '成功')
// 				if(res.statusCode == 401){
// 					uni.clearStorageSync();
// 				}
// 				resolve(res)
// 			}
// 		).catch(
// 			(response) => {
// 				// console.log(response, '失败')
// 				reject(response)
// 			}
// 		)
// 	})
 
// 	return promise
 
// }