import { Goods } from '../model'

/**
 * 保存商品
 * @param { Object } goods 商品对象
 */
export async function createGoods(goods) {
	goods = new Goods(goods)

	goods = await goods.save()

	return goods
}

/**
 * 更新商品
 * @param { Object } conditions 查找条件
 * @param { Object } update 更新条件
 * @param { Object } options 其他选项
 */
export async function updateGoods(conditions, update, options) {
	const data = await Goods.findOneAndUpdate(conditions, update, Object.assign({new: true, upsert: false}, options) ).exec()

	return data	
}
