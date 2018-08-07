import Router from 'koa-router'
import xss from 'xss'
import * as api from '../api'

const router = new Router()


router.post('/add', async (ctx, next) => {
	const data = await api.addToSetGroupById('5b3caa880ac6eb051980fded', '5b2cd7d115799e3e80f0b98d')

	ctx.body = {
		success: true,
		data: data
	}
})

router.post('/del', async (ctx, next) => {
	const data = await api.pullGroupById('5b3caa880ac6eb051980fded', '5b2cd7d115799e3e80f0b98d')

	ctx.body = {
		success: true,
		data: data
	}
})

router.post('/create', async (ctx, next) => {
	let group = {
		name: 'sunmi'
	}
	const data = await api.createGroup(group)

	ctx.body = {
		success: true,
		data: data
	}
})

export default router
