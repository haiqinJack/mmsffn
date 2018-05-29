require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	db: 'mongodb://localhost/ffn',
	qiniu: {
		AK: 'edi70eWipAzOWzDpd21N7K5WnpTWQ57ivYHJUdQp',
		SK: 'Y_-O7LA7bV2-P_51ZTt2LBgZd1h3zkNeZbaNcIEc'
	},
	wechat: {
		appID: 'wxfaa5fc353c6b81d0',
		appSecret: 'a06a4b363c807ff515e78924cf5d493a'
	},
	shop: {
		key: 'zxcvbnmasdfghjklqwertyuiop123456',
		mchId: '1493753812'
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_xml_body__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_xml_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_xml_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_session__);







async function start() {
  const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;

  // Import and Set Nuxt.js options
  let config = __webpack_require__(23);
  config.dev = !(app.env === 'production');

  /**
   * middleware
   */
  app.use(__WEBPACK_IMPORTED_MODULE_4_koa_xml_body___default()());
  app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default()());
  app.keys = ['fafuna'];

  const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false
  };
  app.use(__WEBPACK_IMPORTED_MODULE_5_koa_session___default()(CONFIG, app));
  app.use(async (ctx, next) => {
    ctx.req.session = ctx.session;
    await next();
  });

  // router
  app.use(__WEBPACK_IMPORTED_MODULE_2__routers__["a" /* default */].routes()).use(__WEBPACK_IMPORTED_MODULE_2__routers__["a" /* default */].allowedMethods());
  // Instantiate nuxt.js
  const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

  // Build in development
  if (config.dev) {
    const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
    await builder.build();
  }

  app.use(async (ctx, next) => {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port, host);
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

start();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qiniu__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goods__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wechat_notify__ = __webpack_require__(18);






const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.use('/goods', __WEBPACK_IMPORTED_MODULE_3__goods__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_3__goods__["a" /* default */].allowedMethods());
router.use('/admin', __WEBPACK_IMPORTED_MODULE_1__admin__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_1__admin__["a" /* default */].allowedMethods());
router.use('/qiniu', __WEBPACK_IMPORTED_MODULE_2__qiniu__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_2__qiniu__["a" /* default */].allowedMethods());
router.use('/notify', __WEBPACK_IMPORTED_MODULE_4__wechat_notify__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_4__wechat_notify__["a" /* default */].allowedMethods());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);



const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.post('/login', (ctx, next) => {
	let { email, password } = ctx.request.body;
	var pwd = __WEBPACK_IMPORTED_MODULE_1_crypto___default.a.createHash('md5').update(password, 'utf8').digest('hex').toUpperCase();

	let adminEmail = 'root';
	let adminPassword = '448C734BAB346602663CF807DAA5EB2B';
	let admin = {};
	if (email === adminEmail && pwd === adminPassword) {
		admin = {
			email,
			nickname: 'root'
		};
		ctx.session.admin = admin;
		ctx.status = 200;
		ctx.body = {
			success: true,
			data: admin
		};
	} else if (email !== adminEmail) {
		ctx.status = 200;
		ctx.body = {
			success: false,
			err: '用户名错误'
		};
	} else {
		ctx.status = 200;
		ctx.body = {
			success: false,
			err: '密码错误'
		};
	}
});

router.post('/logout', (ctx, next) => {
	ctx.session.admin = null;
	ctx.status = 200;
	ctx.body = {
		success: true
	};
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qiniu__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);




const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.get('/', (ctx, next) => {
	let accessKey = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.AK;
	let secretKey = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].qiniu.SK;
	let mac = new __WEBPACK_IMPORTED_MODULE_1_qiniu___default.a.auth.digest.Mac(accessKey, secretKey);
	const options = {
		scope: 'fafuna'
	};
	const putPolicy = new __WEBPACK_IMPORTED_MODULE_1_qiniu___default.a.rs.PutPolicy(options);
	const uploadToken = putPolicy.uploadToken(mac);
	ctx.status = 200;
	ctx.body = {
		token: uploadToken
	};
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("qiniu");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(14);






const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.post('/create', async (ctx, next) => {
	let goods = ctx.request.body;
	let id = new Date().getTime();
	goods = {
		id: id,
		title: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.title),
		info: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.info),
		expressPrice: goods.expressPrice,
		thumb: __WEBPACK_IMPORTED_MODULE_3_ramda___default.a.map(item => __WEBPACK_IMPORTED_MODULE_2_xss___default()(item), goods.thumb),
		imageList: __WEBPACK_IMPORTED_MODULE_3_ramda___default.a.map(item => __WEBPACK_IMPORTED_MODULE_2_xss___default()(item), goods.imageList),
		picture: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.picture),
		price: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.price) * 100,
		sku: {
			tree: __WEBPACK_IMPORTED_MODULE_3_ramda___default.a.map(item => ({
				k: __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.k),
				k_s: __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.k_s),
				v: __WEBPACK_IMPORTED_MODULE_3_ramda___default.a.map(i => {
					return i.imgUrl ? {
						id: i.id ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(i.id) : i.id,
						name: __WEBPACK_IMPORTED_MODULE_2_xss___default()(i.name),
						imgUrl: __WEBPACK_IMPORTED_MODULE_2_xss___default()(i.imgUrl)
					} : {
						id: i.id ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(i.id) : i.id,
						name: __WEBPACK_IMPORTED_MODULE_2_xss___default()(i.name)
					};
				})(item.v)
			}), goods.sku.tree),
			list: __WEBPACK_IMPORTED_MODULE_3_ramda___default.a.map(item => ({
				id: id,
				price: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.price) * 100,
				s1: item.s1 ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s1) : item.s1,
				s1Name: item.s1Name ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s1Name) : '',
				s2: item.s2 ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s2) : item.s2,
				s2Name: item.s2 ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s2Name) : '',
				s3: item.s3 ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s3) : item.s3,
				s3Name: item.s3Name ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.s3Name) : '',
				stock_num: item.stock_num ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(item.stock_num) : 0
			}), goods.sku.list),
			price: __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.price),
			none_sku: goods.sku.none_sku,
			collection_id: id,
			stock_num: goods.stock_num ? __WEBPACK_IMPORTED_MODULE_2_xss___default()(goods.stock_num) : goods.stock_num
		}
	};
	const data = await __WEBPACK_IMPORTED_MODULE_4__api__["a" /* createGoods */](goods);

	ctx.body = {
		success: true,
		data: data
	};
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__goods__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__goods__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createGoods;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(16);


/**
 * 保存商品
 * @param { Object } goods 商品对象
 */
async function createGoods(goods) {
  goods = new __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Goods */](goods);

  goods = await goods.save();

  return goods;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);



__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set('debug', true);

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].db);

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('disconnected', () => {
	__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].db);
});
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('error', err => {
	console.error(err);
});
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('open', async => {
	console.log('connected to MongoDB');
});
// models
__webpack_require__(17);

const Goods = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Goods');
/* harmony export (immutable) */ __webpack_exports__["a"] = Goods;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(3);

const Schema = mongoose.Schema;
const GoodsSchema = new Schema({
	id: Number,
	title: String, // 标题
	expressPrice: Number, // 运费,
	price: Number, // 单价 (分)
	picture: String, // 缩略图
	thumb: [// 轮播图
	String],
	imageList: [// 详细图
	String],
	// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
	// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
	sku: {
		tree: [{
			k: String, // 规格类目
			v: [{ // 规格值
				id: String,
				name: String,
				imgUrl: String
			}],
			k_s: { // 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				type: String,
				enum: ['s1', 's2', 's3']
			}
		}],
		// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
		list: [{
			id: Number, // skuId，下单时后端需要
			price: Number, // 价格（单位分）
			s1: String, // 规格类目 k_s 为 s1 的对应规格值 id
			s1Name: String,
			s2: String, // 规格类目 k_s 为 s2 的对应规格值 id
			s2Name: String,
			s3: String, // 规格类目 k_s 为 s3 的对应规格值 id
			s3Name: String,
			stock_num: Number // 当前 sku 组合对应的库存
		}],
		price: Number, // 规格中的默认显示价格（单位元）
		stock_num: Number, // 商品总库存
		collection_id: Number, // 无规格商品 skuId 取 collection_id
		none_sku: { // 是否无规格商品
			type: Boolean,
			default: false
		}
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

GoodsSchema.pre('save', function (next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}

	next();
});

mongoose.model('Goods', GoodsSchema);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(19);


const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

const initConfig = {
  appId: 'wxfaa5fc353c6b81d0',
  partnerKey: 'zxcvbnmasdfghjklqwertyuiop123456',
  mchId: 'zxcvbnmasdfghjklqwertyuiop123456'
};

router.all('/', async (ctx, next) => {
  const body = ctx.request.body;

  console.log(body.xml, 'body,json');
  const data = { appid: ['wxfaa5fc353c6b81d0'],
    attach: ['法弗纳商城-智能设备&127.0.0.1'],
    bank_type: ['CFT'],
    cash_fee: ['1'],
    fee_type: ['CNY'],
    is_subscribe: ['Y'],
    mch_id: ['1493753812'],
    nonce_str: ['OZuB0ZFsrZrGVZ5pJuOY8I43KIJuQ1bG'],
    openid: ['oG02qw5XL-k_goHB-i0sPbv-QAb0'],
    out_trade_no: ['ffn1527570591892'],
    result_code: ['SUCCESS'],
    return_code: ['SUCCESS'],
    sign: ['DDFDA74E27F9D59E0CE2A3646A916F92'],
    time_end: ['20180529130956'],
    total_fee: ['1'],
    trade_type: ['JSAPI'],
    transaction_id: ['4200000142201805295049370176'] };
  Object(__WEBPACK_IMPORTED_MODULE_1__tools__["a" /* wechatValidate */])(data);
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wechatValidate;
/* unused harmony export formatData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);


const RETURN_CODES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};

function wechatValidate(data) {
  let error = null;
  data = formatData(data);
  if (data.return_code == RETURN_CODES.FAIL) {
    error = new Error(data.return_msg);
    error.name = 'ProtocolError';
  } else if (data.result_code == RETURN_CODES.FAIL) {
    error = new Error(data.err_code);
    error.name = 'BusinessError';
  } else if (data.appid && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].appId !== data.appid) {
    error = new Error();
    error.name = 'InvalidAppId';
  } else if (data.mch_id && __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].mchId !== data.mch_id) {
    error = new Error();
    error.name = 'InvalidMchId';
  }
}

function formatData(data) {
  let obj = {};
  for (var k in data) {
    obj[k] = data[k][0];
  }
  return obj;
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("koa-xml-body");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("koa-session");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vant', 'axios', 'element-ui'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: ['~plugins/element-ui-plugin', '~plugins/vant-plugin']
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map