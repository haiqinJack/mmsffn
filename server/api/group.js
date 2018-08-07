import { Group } from '../model'

/**
 * 创建分组
 * @param { Object } group 分组对象
 */
export async function createGroup(group) {
	group = new Group(group)

	group = await group.save()

	return group	
}

/**
 * 向分组添加一个商品ID
 * @param { String } _id 分组_id
 * @param { String } gooodsId 商品对象_id
 */
export async function addToSetGroupById(_id, goodsId) {
	const data = await Group.update({_id}, {$addToSet: {goods_list: goodsId }}).exec()

	return data
}

/**
 * 向分组删除指定商品ID
 * @param { String } _id 分组_id
 * @param { String } gooodsId 商品对象_id
 */
export async function pullGroupById(_id, goodsId) {
	const data = await Group.update({_id}, {$pull: {goods_list: gooodsId }}).exec()

	return data
}
