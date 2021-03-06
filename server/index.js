import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import routers from './routers'
import koaBody from 'koa-bodyparser'
import xmlParser from 'koa-xml-body'
import session from 'koa-session'

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3001

  /**
   * middleware
   */
  app.use(xmlParser())
  app.use(koaBody())
  app.keys = ['fafuna']

  const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false,
  }
  app.use(session(CONFIG, app))  
  app.use(async(ctx, next) => {
    ctx.req.session = ctx.session
    await next()
  })

  // router
  app.use(routers.routes()).use(routers.allowedMethods())

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    console.log('Build in development.....')
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  }) 

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
