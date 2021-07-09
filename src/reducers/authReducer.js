import {types} from '../types/types';



export const authReducer = (state={}, accion)=> {
    switch (accion.type) {
        case types.login:
            return{
                uid: accion.payload.uid,
                name: accion.payload.displayName
            }
        
        case types.logout:
            return{
                
            }
    
        default:
           return state
    }
};