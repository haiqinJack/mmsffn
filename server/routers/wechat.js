import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx, next) => {
	ctx.status = 200
	ctx.body = {
		name: 'qh'
	}
})

export default router
