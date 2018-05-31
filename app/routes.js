/**
 * @Description Layout
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-23 16:00:00
 * @Version 1.0.0
 **/
import { Provider } from 'react-redux'
import {Route} from 'react-router-dom';
import React from 'react'
import FooterPage from './components/Footer';
import {Layout} from 'antd';
import Nav from './containers/Nav'
import HomeServerStatusPage from './containers/HomeStatus';
import HomePage from './containers/HomePage';
import UserList from "./containers/UserList";
import BlogNewPage from './containers/blog/new';
import BlogIndexPage from './containers/blog/index';
import BlogShowPage from './containers/blog/show';
import BlogEditPage from './containers/blog/edit';
import Register from './containers/user/register'
import Login from './containers/user/login'
import './common/global.less'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {Header, Content, Footer} = Layout;
        const { store } = this.props
        return (
            <Provider store={store}>
                <Route render={({ location }) => {
                    return(
                        <div key={location.pathname} name={location.pathname}>
                            <Layout className="layout">
                                <Header>
                                    <Route location={location} path="/" component={Nav} />
                                </Header>
                                <Content style={{ width: '960px', margin: '20px auto' }}>
                                    <div className='pageContent'>
                                        <div>
                                            <Route path='/home' exact component={HomePage} />
                                            <Route path="/server" exact component={HomeServerStatusPage} />
                                            <Route path="/users" exact component={UserList} />
                                            <Route path="/blogs" exact component={BlogIndexPage} />
                                            <Route path="/blog/new" exact component={BlogNewPage} />
                                            <Route path="/blog/show/:id" component={BlogShowPage} />
                                            <Route path="/blog/edit/:id" component={BlogEditPage} />
                                            <Route path="/register" component={Register} />
                                            <Route path="/login" component={Login} />
                                        </div>
                                    </div>
                                    <div className='sideBar'>广告位招租</div>
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>
                                    <Route location={location} path="/" component={FooterPage} />
                                </Footer>
                            </Layout>
                        </div>
                    )
                }}/>
            </Provider>
        )
    }
}
export default Routes