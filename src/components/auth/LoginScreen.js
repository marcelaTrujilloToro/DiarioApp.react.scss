import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, inicioLoginEmailContraseña } from '../../acciones/auth';

 const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'marces@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( inicioLoginEmailContraseña( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <>
        <h3 className="auth__title">Inicio sesión</h3>

        <form onSubmit={ handleLogin }>

            <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />

            <input 
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={ password }
                onChange={ handleInputChange }
            />


            <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={ loading }
            >
                Inicio
            </button>

            
            <div className="auth__social-networks">
                <p>Inicio con redes sociales</p>

                <div 
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Inicio con google</b>
                    </p>
                </div>
            </div>

            <Link 
                to="/auth/registro"
                className="link"
            >
                Crear nueva cuenta    
            </Link>

        </form>
    </>
    )
};
export default LoginScreen;
