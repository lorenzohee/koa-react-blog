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
import HomeGuidePage from './containers/HomeGuidePage';
import HomeServerStatusPage from './containers/HomeStatus';
import EventsPage from './containers/Events';
import HomePage from './containers/HomePage';
import UserList from "./containers/UserList";
import BlogNewPage from './containers/blog/new';
import BlogIndexPage from './containers/blog/index';

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
                                <Content style={{ padding: '0 50px' }}>
                                    <Route path='/home' component={HomePage} />
                                    <Route path="/guide/:guideName" component={HomeGuidePage} />
                                    <Route path="/server" component={HomeServerStatusPage} />
                                    <Route path="/users" component={UserList} />
                                    <Route location={location} path="/events" component={EventsPage} />
                                    <Route location={location} path="/blogs" component={BlogIndexPage} />
                                    <Route path="/blog/new" component={BlogNewPage} />
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