import Router from 'koa-router'
import crypto from 'crypto'

const router = new Router()

router.post('/login', (ctx, next) => {
	let { email, password} = ctx.request.body
	var pwd = crypto.createHash('md5').update(password,'utf8').digest('hex').toUpperCase();

	let adminEmail = 'root'
	let adminPassword = '448C734BAB346602663CF807DAA5EB2B'
	let admin = {}
  if(email === adminEmail && pwd === adminPassword){
  	admin = {
      	email,
      	nickname: 'root'
    }
    ctx.session.admin = admin
    ctx.status = 200
   	ctx.body = {
     	success: true,
     	data: admin
    }
  }else if(email !== adminEmail){
  	ctx.status = 200
		ctx.body = {
			success: false,
			err: '用户名错误'
		}	  	
  }else {
  	ctx.status = 200
		ctx.body = {
			success: false,
			err: '密码错误'
		}
  }	
})

router.post('/logout', (ctx, next) => {
	ctx.session.admin = null
	ctx.status = 200
	ctx.body = {
		success: true
	}
})
export default router
