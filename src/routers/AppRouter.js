import React, {useEffect, useState}  from 'react';
import {firebase} from '../firebase/firebase-config';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import DiarioScreen from '../components/diario/DiarioScreen';
import { useDispatch } from 'react-redux';
import { login } from '../acciones/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
       
        firebase.auth().onAuthStateChanged(( user )=>{
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        } )
        
    }, [dispatch, setChecking])

    if (checking) {
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                     />
                    
                    <PrivateRoute 
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/" 
                        component={ DiarioScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
