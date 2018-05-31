/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:17
 * @Version 1.0.0
 **/
import path from 'path'
import views from 'koa-views'
import json from 'koa-json'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'
import convert from 'koa-convert'
import bodyParser from 'koa-bodyparser'
import router from './routes'
import config from '../common/config'
import response_formatter from '../common/services/response_formatter'
import jwt from 'koa-jwt'

const secert = 'jwt_secret_lorenzo'
const templatePath = path.join(__dirname, './templates')

export default (app) => {
  // reg middlewares
  app.use(convert(bodyParser()))
  app.use(convert(json()))
  app.use(convert(logger()))

    //jwt authen
  // app.use(jwt({secert}).unless({path: [/\api/, /\login/, /\register/]}))

  // static serve
  app.use(convert(koaStatic(config.rootPath + config.publicPath)))

  // template ejs
  app.use(views(templatePath, { extension: 'ejs' }))

    //response formatter
    app.use(response_formatter('^/api'))

  // router dispatcher
  app.use(router)

  // 500 error
  koaOnError(app, { template: templatePath + '/500.ejs' })

  // logger
  if (app.env === 'development') {
    app.use(async (ctx, next) => {
      const start = new Date()
      await next()
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
  }

  // 404
  app.use(async (ctx) => {
    ctx.status = 404
    await ctx.render('404')
  })
}
