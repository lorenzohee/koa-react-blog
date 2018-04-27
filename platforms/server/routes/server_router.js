/**
 * @Description server router
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午6:43
 * @Version 1.0.0
 **/
import { Router, Route, IndexRoute, StaticRouter } from 'react-router-dom'
import React from 'react'

import ReactDOMServer from 'react-dom/server';
import config from '../../common/config'
import configureStore from '../../../app/store/configureStore'
import Routes from '../../../app/routes';

const store = configureStore()

export default async (ctx, next) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={ctx.url}
      context={context}
    >
      <Routes store={store} />
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    next()
  } else {
    await ctx.render('index', {
      title: config.title,
      dev: ctx.app.env === 'development',
      reduxData: store.getState(),
      app: html
    })
    next()
  }
}