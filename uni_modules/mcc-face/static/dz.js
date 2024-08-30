var AliveDetectCtrl = {
	action: '',
	mouseCount: 0,
	headCount: 0,
	eyeCount: 0,
	passCount: 1, // 通过检测的触发次数
	init: function () {
		this.last_time = 0;
		this.last_nose_left = 0;
		this.last_nose_top = 0;

		this.last_dis_mouse = 0;

		this.last_dis_eye_norse = 100000000;
		this.last_dis_left_right = 100000000;

		this.mouseCount = 0;
		this.headCount = 0;
		this.eyeCount = 0;
	},
	start: function (action) {
		this.init();
		this.action = action;
	},
	stop: function () {
		this.init();
		this.action = '';
	},
	test: function (action, position) {

		if (['mouse', 'head'].indexOf(this.action) !== -1 &&
			!(this.last_time === 0 || (new Date().getTime() - this.last_time > 500 && new Date().getTime() - this.last_time < 3000))
		) return;
		if (['eye'].indexOf(this.action) !== -1 &&
			!(this.last_time === 0 || (new Date().getTime() - this.last_time > 10))
		) return;

		switch (action) {
			case 'mouse':
				return this.testMouse(position);
				break;
			case 'head':
				return this.testHead(position);
				break;
			case 'eye':
				return this.testEye(position);
				break;
		}

	},
	// 请张合嘴巴
	testMouse: function (position) {
		// 左眼中心和鼻子中心的距离
		var xdiff = position[62][0] - position[27][0];
		var ydiff = position[62][1] - position[27][1];
		var dis_eye_norse = Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);

		// 上嘴唇和下嘴唇的距离
		var xdiff_mouse = position[53][0] - position[47][0];
		var ydiff_mouse = position[53][1] - position[47][1];
		var dis_mouse = Math.pow((xdiff_mouse * xdiff_mouse + ydiff_mouse * ydiff_mouse), 0.5);

		// 上次的眼鼻距离和这次的眼鼻距离差
		var dn = Math.abs(dis_eye_norse - this.last_dis_eye_norse);
		// 上次的嘴距离和本次的嘴距离差
		var dm = Math.abs(dis_mouse - this.last_dis_mouse);

		// 鼻子的位置变化不大
		if (this.last_nose_left > 0 && this.last_nose_top > 0 &&
			Math.abs(position[62][0] - this.last_nose_left) < 5 &&
			Math.abs(position[62][1] - this.last_nose_top) < 5
		) {
			if (this.last_dis_eye_norse > 0 && dn < dis_eye_norse * 1 / 50 &&
				this.last_dis_mouse > 0 && dm > dis_mouse / 10 &&
				++this.mouseCount >= this.passCount
			) {

				this.stop();
				return true;

			}
		}

		this.last_dis_mouse = dis_mouse;
		this.last_dis_eye_norse = dis_eye_norse;
		this.last_nose_left = position[62][0];
		this.last_nose_top = position[62][1];
		this.last_time = new Date().getTime();
	},
	// 摇头
	testHead: function (position) {
		// 左脸边缘到鼻子中心的距离
		var xdiff_left = position[62][0] - position[2][0];
		var ydiff_left = position[62][1] - position[2][1];
		var dis_left = Math.pow((xdiff_left * xdiff_left + ydiff_left * ydiff_left), 0.5);

		// 右脸边缘到鼻子中心的距离
		var xdiff_right = position[12][0] - position[62][0];
		var ydiff_right = position[12][1] - position[62][1];
		var dis_right = Math.pow((xdiff_right * xdiff_right + ydiff_right * ydiff_right), 0.5);

		// 右脸边缘到左脸边缘的距离
		var xdiff_side = position[12][0] - position[2][0];
		var ydiff_side = position[12][1] - position[2][1];
		var dis_side = Math.pow((xdiff_side * xdiff_side + ydiff_side * ydiff_side), 0.5);

		// 左脸宽度与右脸宽度的差值，用于判断非正脸，即摇头
		var dis_left_right = dis_left - dis_right;

		if (this.last_dis_left_right > 0 && dis_left_right > dis_side / 3 &&
			++this.headCount >= this.passCount
		) {

			this.stop();
			return true;
		}

		this.last_dis_left_right = dis_left_right;
		this.last_time = new Date().getTime();
	},
	// 眨眼
	testEye: function (position) {
		// 左眼中心和鼻子中心的距离
		var xdiff1 = position[62][0] - position[27][0];
		var ydiff1 = position[62][1] - position[27][1];
		var dis_eye_norse1 = Math.pow((xdiff1 * xdiff1 + ydiff1 * ydiff1), 0.5);

		// 右眼中心和鼻子中心的距离
		var xdiff2 = position[62][0] - position[32][0];
		var ydiff2 = position[62][1] - position[32][1];
		var dis_eye_norse2 = Math.pow((xdiff2 * xdiff2 + ydiff2 * ydiff2), 0.5);

		var dis_eye_norse = (dis_eye_norse1 + dis_eye_norse2);

		// 鼻子的位置变化不大
		if (this.last_nose_left > 0 && this.last_nose_top > 0 &&
			Math.abs(position[62][0] - this.last_nose_left) < 0.5 &&
			Math.abs(position[62][1] - this.last_nose_top) < 0.5
		) {
			if (this.last_dis_eye_norse > 0 &&
				// TODO 眨眼阈值待界定，与眼睛大小有关
				(Math.abs(dis_eye_norse - this.last_dis_eye_norse) > dis_eye_norse * 1 / 30) &&
				++this.eyeCount >= this.passCount
			) {

				this.stop();
				return true;

			}
		}

		this.last_nose_left = position[62][0];
		this.last_nose_top = position[62][1];
		this.last_dis_eye_norse = dis_eye_norse;
		this.last_time = new Date().getTime();
	},
}

export default {
	aa1fun(position) {
		return AliveDetectCtrl.test('mouse', position);
	},
	aa2fun(position) {
		return AliveDetectCtrl.test('head', position);
	},
	aa3fun(position) {
		return AliveDetectCtrl.test('eye', position);
	},
}