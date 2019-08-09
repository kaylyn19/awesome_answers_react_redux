import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function AuthRoute(props) {
    // deconstruct isAuthenticated from props;
    // deconstruct component and rename it to Component from props;
    // deconstruct everything else and place it in routeProps;
    const {isAuthenticated, component: Component, ...routeProps } = props
    if (!isAuthenticated) {
        return(<Redirect to='/sign_in'/>)
    } else {
        return <Route {...routeProps} component={Component}/>
    }
}

// example use case of AuthRoute
{/*<AuthRoute isAuthenticated={true} component={ProductShowPage} style={{color: 'red'}} className='page main'/>*/}
// const props = {
//     isAuthenticated: true,
//     component: <Component>,
//     style: {{color: 'red'}},
//     className: 'page main',
// }