/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:16
 * @Version 1.0.0
 **/
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from "../../app/routes";
import configureStore from '../../app/store/configureStore'

const store = configureStore(window.__REDUX_STATE__)
ReactDOM.render(
	<BrowserRouter>
    	<Routes store={store} />
	</BrowserRouter>,
  document.querySelector('.react-container')
)
