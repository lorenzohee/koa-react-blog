/**
 * @description Layout
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-23 16:00:00
 */
import { Provider } from 'react-redux'
import {Route} from 'react-router-dom';
import React from 'react'
import Footer from './components/Footer';
import {Layout} from 'antd';
import Nav from './containers/Nav'
import HomeGuidePage from './containers/HomeGuidePage';
import HomeServerStatusPage from './containers/HomeStatus';
import EventsPage from './containers/Events';

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { store } = this.props
        return (
        	<Provider store={store}>
				<Route render={({ location }) => {
					return(
						<div key={location.pathname} name={location.pathname}>
							<Layout>
								<Route location={location} path="/" component={Nav} />
								<Route path="/guide/:guideName" component={HomeGuidePage} />
								<Route path="/server" component={HomeServerStatusPage} />
								<Route location={location} path="/events" component={EventsPage} />
								<Route location={location} path="/" component={Footer} />
							</Layout>
                        </div>
					)
				}}/>
			</Provider>
        )
    }
}


export default Routes