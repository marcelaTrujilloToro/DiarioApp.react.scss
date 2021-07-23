import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Componente,
    ...rest
}) => {

    return (
       <Route {...rest}
           component={ (props) => (

               (isAuthenticated)
               ? (<Redirect to= '/'/>)
               : (<Componente{...props}/>)
           )}
            >
       </Route>
    )
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
