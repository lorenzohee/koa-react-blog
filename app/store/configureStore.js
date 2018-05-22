/**
 * @Description redux store add chrome plugin listener
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:14
 * @Version 1.0.0
 **/
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers';
// import thunk from 'redux-thunk';
//
// let store;
// if( undefined == window || !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
//     store = createStore(
//         rootReducer,
//         applyMiddleware(thunk)
//     );
// }else{
//     store = createStore(
//         rootReducer,
//         compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
//     );
// }
//
// export default store;