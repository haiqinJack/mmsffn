import Router from 'koa-router'
import wechat from './wechat'
import qiniu from './qiniu'

const router = new Router()

router.use('/wechat', wechat.routes(), wechat.allowedMethods())
router.use('/qiniu', qiniu.routes(), qiniu.allowedMethods())

export default router
