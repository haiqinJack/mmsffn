const xss = require('xss')
const R = require('ramda')
let goods = {
  title: '美国伽力果（约680g/3个）',
  expressPrice: 100,
  thumb: [
    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
  ],
  picture: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
  sku: {
  	tree: [
    	{k: '颜色',
        v: [{id: '0', name: '红色',imgUrl: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg'}
          ,{id: '1',name: '蓝色',imgUrl: 'http://img.taopic.com/uploads/allimg/121019/234917-121019231h258.jpg'}],
        k_s: 's1'},
      {k: '尺寸', 
        v: [{id: '0',name: 'S码',}
          ,{id: '1',name: 'M码'}],
        k_s: 's2'}
    ],
    list: [
    	{id: 2259, price: 100, s1: '1', s2: '0', s3: '0', stock_num: 110 },
    	{id: 2259, price: 100, s1: '1',s2: '1', s3: '0',stock_num: 110 },
    	{id: 2259, price: 200, s1: '0', s2: '0', s3: '0', stock_num: 110},
    	{id: 2259, price: 200, s1: '0',s2: '1',s3: '0', stock_num: 110 }                  
    ],
  stock_num: 2270, 
  collection_id: 2261, 
  none_sku: false, 
  },
  imageList: [
    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    'http://img.taopic.com/uploads/allimg/121019/234917-121019231h258.jpg',
    'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
    'http://img.zcool.cn/community/01d941590c5577a801214550416103.jpg@2o.jpg'
  ]
}


//let tree = goods.sku.tree

//console.log(tree[1].v)



// p = {
// 	title: xss(goods.title),
// 	info: xss(goods.info),
// 	expressPrice: xss(goods.expressPrice),
// 	thumb: R.map(item => xss(item), goods.thumb),
// 	imageList: R.map(item => xss(item), goods.imageList),
// 	picture: xss(goods.picture),
// 	stock_num: xss(goods.stock_num),
// 	price: xss(goods.price),
// }

// // l = {
// // 	sku: R.map(item => ({
// // 		tree: R.compose(R.map(tree => (
// // 			console.log(tree)
// // 		))(item.tree)),
// // 		stock_num: xss(item.stock_num),
// // 		collection_id: xss(item.collection_id),
// // 		none_sku: xss(item.none_sku)
// // 	}), goods.sku)
// // }

l = {
	sku: {
		tree: R.map((item) => ({
			k: xss(item.k),
			v: R.map(i => {
				return i.imgUrl ? 
				({
					id: xss(i.id),
					name: xss(i.name),
					imgUrl: xss(i.imgUrl)
				}) :
				({
					id: xss(i.id),
					name: xss(i.name)
				})
			}
			)(item.v)
		}), goods.sku.tree),
		list: R.map(item => ({
			id: xss(item.id),
			price: xss(item.price),
			s1: xss(item.s1),
			s1Name: xss(item.s1Name),
			s2: xss(item.s2),
			s2Name: xss(item.s2Name),
			s3: item.s3? xss(item.s3) : 'null',
			s3Name: xss(item.s3Name),
			stock_num: xss(item.stock_num)
		}), goods.sku.list),
		none_sku: xss(goods.sku.none_sku),
		collection_id: xss(goods.sku.collection_id),
		stock_num: xss(goods.sku.stock_num),
	}
}
// v = R.map((item) => ({
// 	k: xss(item.k),
// 	v: R.map(i => 
// 		i.imgUrl ? {
// 		id: i.id,
// 		name: i.name+ 'map',
// 		imgUrl: i.imgUrl || null
// 	}
// 	:
// 	{
// 		id: i.id,
// 		name: i.name
// 	}, item.v)
// }), goods.sku.tree)
console.log(xss('0'),'??')
