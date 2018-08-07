import Router from 'koa-router'
import admin from './admin'
import qiniu from './qiniu'
import goods from './goods'
import notify from './wechat-notify'
import group from './group'

const router = new Router()

router.use('/goods', goods.routes(), goods.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/qiniu', qiniu.routes(), qiniu.allowedMethods())
router.use('/notify', notify.routes(), notify.allowedMethods())
router.use('/group', group.routes(), group.allowedMethods())

export default router
