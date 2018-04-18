/* jshint esversion: 6 */

import {App} from '../../../app/containers/App'
import {HomeLayout} from '../../../app/containers/HomeLayout'
import {HomeListPage} from '../../../app/containers/HomeList';
import {HomeGuidePage} from '../../../app/containers/HomeGuidePage';
import {HomeServerStatusPage} from '../../../app/containers/HomeStatus';
import {EventsPage} from '../../../app/containers/Events';
import { Router, Route, IndexRoute, StaticRouter } from 'react-router-dom'
import React from 'react'

import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux'
import config from '../../common/config'
import configureStore from '../../../app/store/configureStore'
const store = configureStore()


export default async (ctx, next) => {

  const context = ctx;
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={context.url}
        context={context}
      >
        <Route path="/" component={App}>
          <Route component={HomeLayout}>
            <IndexRoute component={HomeListPage} />
            <Route path="guide/:guideName" component={HomeGuidePage} />
            <Route path="server" component={HomeServerStatusPage} />
          </Route>
          <Route path="/events" component={EventsPage} />
        </Route>
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
  //   ctx.redirect(context.url)
  // } else {
    await ctx.render('index', {
      title: config.title,
      dev: ctx.app.env === 'development',
      reduxData: store.getState(),
      app: html
    })
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);