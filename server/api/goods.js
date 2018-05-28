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
