import Router from 'koa-router'
import qiniu from 'qiniu'
import config from '../config'

const router = new Router()

router.get('/', (ctx, next) => {
	let accessKey = config.qiniu.AK
	let secretKey = config.qiniu.SK
	let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
	const options = {
	  scope: 'fafuna',
	}
	const putPolicy = new qiniu.rs.PutPolicy(options)
	const uploadToken = putPolicy.uploadToken(mac)
	ctx.status = 200
	ctx.body = {
		token: uploadToken
	}
})

export default router
