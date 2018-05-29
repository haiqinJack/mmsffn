import Router from 'koa-router'
import { wechatValidate } from '../tools'
import xml2js from 'xml2js'
import * as api from '../api'

const router = new Router()
const builder = new xml2js.Builder();

const initConfig = {
	appId: 'wxfaa5fc353c6b81d0',
	partnerKey: 'zxcvbnmasdfghjklqwertyuiop123456',
	mchId: 'zxcvbnmasdfghjklqwertyuiop123456'
}

router.post('/', async (ctx, next) => {
  let  body = ctx.request.body
  body = body.xml
  console.log(body,'>?????')
  try {
    wechatValidate(data)
    const order = await api.getOrderByOpenIdAndOutTradeNo(data.openid, data.out_trade_no)
    console.log(order)

    if(order && !order.success) {
      console.log('if')
      const a = await api.setOrderIsSuccess(data.openid, data.out_trade_no, true)
      console.log(a)
      
      ctx.status = 200
      ctx.body = builder.buildObject({
        return_code: 'SUCCESS',
        return_msg: 'OK'
      })
    }else if(order && order.success) {
      console.log('else if ')
      ctx.status = 200
      ctx.body = builder.buildObject({
        return_code: 'SUCCESS',
        return_msg: 'OK'
      })      
    }else {
      console.log('else')
      ctx.status = 200
      ctx.body = builder.buildObject({
        return_code: 'FAIL',
        return_msg: '可能是个假数据'
      })      
    }
  } catch (e) {
    console.log(e.name,'catch')
    ctx.status = 200
    ctx.body = builder.buildObject({
      return_code: 'FAIL',
      return_msg: e.name
    })
     
  }
  
})

export default router
