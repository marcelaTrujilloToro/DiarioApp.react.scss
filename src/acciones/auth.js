import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import {types} from '../types/types';

export const inicioLoginEmailContraseña = (correo, contraseña) => {
    return (dispatch) => {

        setTimeout(() => {

           dispatch(login(123, 'Zharick')); 

        }, 3500);
    }
};

export const inicioGoogleLogin = () => {
    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}

export  const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})