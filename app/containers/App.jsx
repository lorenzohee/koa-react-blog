/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:14
 * @Version 1.0.0
 **/
import React, { Component } from 'react'
import '../common/layout.less'
import HeaderNav from '../components/Header'
import Main from '../components/Main'
import { fetchStateIfNeeded } from '../actions/mirrorState'
import { connect } from 'react-redux'

class App extends Component {
  static fetch (state, dispatch) {
    const fetchTasks = []
    fetchTasks.push(
      dispatch(fetchStateIfNeeded(state))
    )
    return fetchTasks
  }

  componentDidMount () {
    const { loaded, success } = this.props
    if ( !loaded || (loaded && !success) ) {
      this.constructor.fetch(this.props, this.props.dispatch)
    }
  }
  
  render () {
    const { location: { pathname } } = this.props
    const headerCurrent = pathname === '/' ? 'home' : pathname.slice(1)
    
    return (<div>
      <HeaderNav current={headerCurrent}/>
      <Main>{this.props.children}</Main>
    </div>)
  }
}

export default connect(
  state => state.mirror
)(App)