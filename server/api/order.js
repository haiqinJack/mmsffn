import { Order } from '../model'
/**
 * 根据opneid，订单号获取订单
 * @param { String } openid 用户标示
 * @param { String } out_trade_no 订单号 (ffn + new Date)
 */
export async function getOrderByOpenIdAndOutTradeNo(openid, out_trade_no) {
	const data = await Order.findOne({openid, out_trade_no}, 'openid out_trade_no totalFee success payType').exec()

	return data
}

/**
 * 设置订单支付成功状态
 * @param { String } openid 用户标示
 * @param { String } out_trade_no 订单号 (ffn + new Date)
 * @param { Boolean } success 是否支付成功
 */
export async function setOrderIsSuccess(openid, out_trade_no, success) {
	let conditions = {openid , out_trade_no }
	let update = {success}
	// new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
	// upsert: bool - creates the object if it doesn't exist. defaults to false.
	let options = {new: true, upsert: true}

	const data = await Order.findOneAndUpdate(conditions, update, options).exec()

	return data
}
