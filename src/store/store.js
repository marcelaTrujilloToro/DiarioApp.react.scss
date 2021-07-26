import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notasReducer } from '../reducers/notasReducer';
import {uiReducer} from '../reducers/uiReducer';



//configuracion para trabajar acciones asincronas 

//habilita que se tengan las extensiones de devtools y usar middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notas: notasReducer
});


//createStore solo recibe un reducer por defecto

//se usa combineReducers para mandarlo al createStore, combinando varios reducers

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);