import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';


//configuracion para trabajar acciones asincronas 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
});



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);