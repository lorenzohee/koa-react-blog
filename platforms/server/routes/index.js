/**
 * @Description router index
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午6:43
 * @Version 1.0.0
 **/
export default async (ctx, next) => {
  // api server through koa-router
  if (ctx.path.match(/^\/api/)) {
    return await require('./api').routes()(ctx, next)
  }
  // others react-router to render
  await require('./server_router')(ctx, next)
}