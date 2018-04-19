import React from 'react'
import ReactDOM , {BrowserRouter as Router} from 'react-dom-dom'
import routes from '../../app/routes'
import Routes from '../../../app/routes_rewrite';
import { Provider } from 'react-redux'
import configureStore from '../../app/store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const store = configureStore(window.__REDUX_STATE__)
ReactDOM.render(
  <Provider store={store}>
	<Router history={customHistory}>
    	<Routes />
	</Router>
  </Provider>,
  document.querySelector('.react-container')
)
