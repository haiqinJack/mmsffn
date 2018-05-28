import Router from 'koa-router'
import admin from './admin'
import qiniu from './qiniu'
import goods from './goods'

const router = new Router()

router.use('/goods', goods.routes(), goods.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/qiniu', qiniu.routes(), qiniu.allowedMethods())

export default router
