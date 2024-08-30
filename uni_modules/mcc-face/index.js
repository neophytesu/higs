// plus.io.requestFileSystem(plus.io.PRIVATE_WWW, function(fs) {
// 	// fs.root是根目录操作对象DirectoryEntry
// 	// 创建读取目录信息对象 
// 	var directoryReader = fs.root.createReader();
// 	directoryReader.readEntries(function(entries) {
// 		var i;
// 		for (i = 0; i < entries.length; i++) {
// 			console.log("Read entries failed: " + entries[i].name)
// 		}
// 	}, function(e) {
// 		console.log("Read entries failed: " + e.message)
// 	});
// });
// plus.io.resolveLocalFileSystemURL('_www/uni_modules/mcc-face/static', function(entry) {
// 	var directoryReader = entry.createReader();
// 	directoryReader.readEntries(function(entries) {
// 		var i;
// 		for (i = 0; i < entries.length; i++) {
// 			console.log("Read entries failed: " + entries[i].name)
// 		}
// 	}, function(e) {
// 		console.log("Read entries failed: " + e.message)
// 	});
// }, function() {
// 	a(false)
// })

// export default {
// 	web: false,
// 	getis() {
// 		return new Promise((a, b) => {
// 			plus.io.resolveLocalFileSystemURL('_www/uni_modules/mcc-face/static/face.js', function(entry) {
// 				a(true)
// 			}, function() {
// 				a(false)
// 			})
// 		})
// 	},
// 	close() {
// 		plus.webview.close(this.web)
// 	},
// 	async open(obj = ['a', 'b', 'c'], callback = function() {}) {
// 		if (typeof obj !== 'object') {
// 			callback('参数有误不是 object');
// 			return false
// 		}
// 		let _this = this;
// 		if (await this.getis()) {
// 			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
// 				fs.root.getFile('face.html', {
// 					create: true
// 				}, function(fileEntry) {
// 					fileEntry.file(function(file) {
// 						fileEntry.createWriter(function(writer) {
// 							writer.write(
// 								'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body></body></html>'
// 							);
// 							_this.web = plus.webview.create(
// 								'_doc/face.html?type=' +
// 								JSON.stringify(obj), 999, {
// 									'uni-app': 'none',
// 									"background": '#0000',
// 									"backButtonAutoControl": 'close',
// 									top: 0
// 								}, 'zoom-fade-out');
// 							_this.web.appendJsFile('_www/uni_modules/mcc-face/static/face.js');
// 							_this.web.show();
// 							var _cc = setInterval(() => {
// 								if (plus.storage.getItem(
// 										"facetempuserimg")) {
// 									let img = plus.storage.getItem(
// 										"facetempuserimg");
// 									plus.storage.removeItem(
// 										"facetempuserimg");
// 									callback(img)
// 								};
// 								if (!plus.webview.getWebviewById('999')) {
// 									plus.storage.removeItem(
// 										"facetempuserimg");
// 									clearInterval(_cc)
// 								}
// 							}, 500)
// 						})
// 					})
// 				})
// 			})
// 		} else {
// 			callback('js加载错误 ,请勿修改插件地址,文件名,文件地址， 保持正确目录名称结构，/uni_modules/mcc-face/static/face.js')
// 		}
// 	}
// }