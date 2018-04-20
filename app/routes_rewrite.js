import App from './containers/App'
import HomeLayout from './containers/HomeLayout'
import HomeListPage from './containers/HomeList';
import HomeGuidePage from './containers/HomeGuidePage';
import HomeServerStatusPage from './containers/HomeStatus';
import EventsPage from './containers/Events';
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory, withRouter} from 'react-router-dom';
import React from 'react'


const RedirectWithStatus = ({from, to , status}) =>{
	<Route render = {({staticContext})=>{
		if(staticContext)
			staticContext.status = status
		return <Redirect from={from} to={to} />
	}}/>
}

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
						<div key={location.pathname} name={location.pathname}  style={{height:"100%",width:"100%",position:"absolute"}}>
							<Route location={location} exact path="/" component={App}>
                            </Route>
                            <Route location={location} path="/events" component={EventsPage} />
						</div>
					)
				}}/>
			</Provider>
        )
    }
}


export default Routes