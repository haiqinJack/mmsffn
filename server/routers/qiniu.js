import Router from 'koa-router'
import qiniu from 'qiniu'

const router = new Router()

router.get('/', (ctx, next) => {
	let accessKey = 'edi70eWipAzOWzDpd21N7K5WnpTWQ57ivYHJUdQp';
	let secretKey = 'Y_-O7LA7bV2-P_51ZTt2LBgZd1h3zkNeZbaNcIEc';
	let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
	var options = {
	  scope: 'fafuna',
	};
	var putPolicy = new qiniu.rs.PutPolicy(options);
	var uploadToken = putPolicy.uploadToken(mac);
	ctx.status = 200
	ctx.body = {
		token: uploadToken
	}
})

export default router
