import { Router, Route, IndexRoute, StaticRouter } from 'react-router-dom'
import React from 'react'

import ReactDOMServer from 'react-dom/server';
import config from '../../common/config'
import configureStore from '../../../app/store/configureStore'
import Routes from '../../../app/routes_rewrite';
import { matchPath } from 'react-router-dom';

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