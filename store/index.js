import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    imageCDN: 'http://p8p8yzlxl.bkt.clouddn.com/',
    user: {
      id: '1'
    },
    goods: {
      // id: 2259,
      // title: '美国伽力果（约680g/3个）',
      // // price: 2680,
      // expressPrice: 100,
      // // remain: 19,
      // thumb: [
      //   'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      //   'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
      // ],
      // picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      // sku: {
      //   // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      //   // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      // tree: [
      //   {
      //     k: '颜色', // skuKeyName：规格类目名称
      //     v: [
      //       {
      //         id: '0', // skuValueId：规格值 id
      //         name: '红色', // skuValueName：规格值名称
      //         imgUrl: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg' // 规格类目图片，只有第一个规格类目可以定义图片
      //       }
      //       ,{
      //         id: '1',
      //         name: '蓝色',
      //         imgUrl: 'http://img.taopic.com/uploads/allimg/121019/234917-121019231h258.jpg'
      //       }
      //     ],
      //     k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //   },
      //   {
      //     k: '尺寸', // skuKeyName：规格类目名称
      //     v: [
      //       {
      //         id: '0', // skuValueId：规格值 id
      //         name: 'S码', // skuValueName：规格值名称
      //       }
      //       ,{
      //         id: '1',
      //         name: 'M码'
      //       }
      //     ],
      //     k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //   }                    
      // ],// tree end
      // // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      // list: [
      //   {
      //     id: 2259, // skuId，下单时后端需要
      //     price: 100, // 价格（单位分）
      //     s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
      //     s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
      //     s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //     stock_num: 110 // 当前 sku 组合对应的库存
      //   },{
      //     id: 2259, // skuId，下单时后端需要
      //     price: 100, // 价格（单位分）
      //     s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
      //     s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
      //     s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //     stock_num: 110 // 当前 sku 组合对应的库存
      //   },{
      //     id: 2259, // skuId，下单时后端需要
      //     price: 200, // 价格（单位分）
      //     s1: '0', // 规格类目 k_s 为 s1 的对应规格值 id
      //     s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
      //     s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //     stock_num: 110 // 当前 sku 组合对应的库存
      //   }
      //   ,{
      //     id: 2259, // skuId，下单时后端需要
      //     price: 200, // 价格（单位分）
      //     s1: '0', // 规格类目 k_s 为 s1 的对应规格值 id
      //     s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
      //     s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //     stock_num: 110 // 当前 sku 组合对应的库存
      //   }                  
      // ],// list end          
      // // price: 0, // 默认价格（单位元）
      // stock_num: 2270, // 商品总库存
      // collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      // none_sku: false, // 是否无规格商品
      // // hide_stock: false, // 是否隐藏剩余库存    
      // // messages: [
      // //   {
      // //     // 商品留言
      // //     multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      // //     name: '留言', // 留言名称
      // //     type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      // //     required: '0' // 是否必填 '1' 表示必填
      // //   }
      // // ],
      // },// sku end
      // imageList: [
      //   'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      //   'http://img.taopic.com/uploads/allimg/121019/234917-121019231h258.jpg',
      //   'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
      //   'http://img.zcool.cn/community/01d941590c5577a801214550416103.jpg@2o.jpg'
      // ] // imageList end     
    }, // goods end
    cartList:[//购物车列表
       // {
       //  id: 1,
       //  title: '匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套',
       //  desc: '蓝色',
       //  num: 2,
       //  price: 200,
       //  picture: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
       //    expressPrice: 100
       // },
       // {
       //  id: 2,
       //  title: '匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套',
       //  desc: '红色',
       //  num: 2,
       //  price: 300,
       //  picture: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
       //    expressPrice: 100
       // }       
    ],
    payment:[
       // {
       //  id: 1,
       //  title: '匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套匠心特制黑糖姜枣膏 买2送罐环保xx餐具一套',
       //  desc: '规格',
       //  num: 2,
       //  price: 200,
       //  picture: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
       //    expressPrice: 100
       // }
    ],//结算列表,
    skuBox: [
      // {
      //   goodsId: 1,
      //   sku: {
      //     // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      //     // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      //     tree: [
      //       {
      //         k: '颜色', // skuKeyName：规格类目名称
      //         v: [
      //           {
      //             id: '30349', // skuValueId：规格值 id
      //             name: '红色', // skuValueName：规格值名称
      //             imgUrl: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg' // 规格类目图片，只有第一个规格类目可以定义图片
      //           },
      //           {
      //             id: '1215',
      //             name: '蓝色',
      //             imgUrl: 'https://img.yzcdn.cn/2.jpg'
      //           }
      //         ],
      //         k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //       }
      //     ],
      //     // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      //     list: [
      //       {
      //         id: 2259, // skuId，下单时后端需要
      //         price: 100, // 价格（单位分）
      //         s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
      //         s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
      //         s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //         stock_num: 110 // 当前 sku 组合对应的库存
      //       },
      //       {
      //         id: 2259, // skuId，下单时后端需要
      //         price: 100, // 价格（单位分）
      //         s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
      //         s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
      //         s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      //         stock_num: 110 // 当前 sku 组合对应的库存
      //       }            
      //     ],
      //     price: '1.00', // 默认价格（单位元）
      //     stock_num: 227, // 商品总库存
      //     collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      //     none_sku: false, // 是否无规格商品
      //     hide_stock: false // 是否隐藏剩余库存
      //   }// sku end
      // }          
    ],
    products: [
      // {
      //   id: 1,
      //   picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
      //   title: '美国伽力果（约680g/3个）',
      //   price: 100
      // }           
    ]
  },
	getters: {
    cartList: state => state.cartList,
    goods: state => state.goods,
    skuBox: state => state.skuBox,
    products: state => state.products
	},
	actions: {
    async fetchCartList({ state }) {
      let url  = 'http://rap2api.taobao.org/app/mock/10346//api/user/cart/' + state.user.id
      const res = await axios.get(url)

      state.cartList = res.data.data   
    },
    async fetchGoods({ commit, state }, goodsId) {
      let url = 'http://rap2api.taobao.org/app/mock/10346//api/goods/' + goodsId
      const res = await axios.get(url)

      commit('SET_GOODS', res.data.data.goods)
    },
    async fetchProducts({ commit, state}) {
      let url = 'http://rap2api.taobao.org/app/mock/10346//api/goods/all'
      const res = await axios.get(url)

      state.products = res.data.data
    },
    async fetchSkuByGoodsId({ commit, state}, goodsId) {
      let url = 'http://rap2api.taobao.org/app/mock/10346//api/goods/sku/' + goodsId
      const res = await axios.get(url)
     
      commit('SET_SKUBOX', {goodsId: goodsId,sku:res.data.data.sku})

      return res
    },
    async fetchQiniuToken() {
      let url = '/qiniu'
      const res = await axios.get(url)

      return res.data
    }
	},
  mutations: {
    SET_PAYMENT(state, value) {
      state.payment = value
    },
    DEL_CARTLIST(state, arr) {
      arr.forEach((value, index) => {
        state.cartList.forEach((val, i) => {
          if(val.id === value) {
            state.cartList.splice(i,1)
          }
        })
      })
    },
    SET_GOODS(state, goods) {
      let arr = getMaximumPriceAndMinimumPrice(goods)
      goods = formatPrice(goods, arr)

      state.goods = goods    
    },
    SET_SKUBOX(state, obj) {
      state.skuBox.push(obj)
    }
  }
})

export function getMaximumPriceAndMinimumPrice(goods) {
  let arr = []
  let list = goods.sku.list
  for(let i = 0; i < list.length; i++){
    arr.push(list[i].price)
  }
  //最大价格
  let max = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  //最小价格
  let min = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }      
  return [max, min]
}

export function formatPrice(goods, arr) {
  if(arr[0] === arr[1]){
    goods.sku.price = (arr[0] / 100).toFixed(2)
    goods.price = (arr[0] / 100).toFixed(2)
    return goods
  }else{
    goods.sku.price = (arr[1] / 100).toFixed(2) + '~' + (arr[0] / 100 ).toFixed(2)
    goods.price = (arr[1] / 100).toFixed(2) + '~' + (arr[0] / 100 ).toFixed(2)
    return goods
  }    
}
export default store
