import React from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {inicioGoogleLogin, inicioLoginEmailContraseña} from '../../acciones/auth';

const LoginScreen = () => {

  //hook de redux:  darle acceso al dispatch de acciones en cualquier lugar
  const dispatch = useDispatch();
  
  const [values, handleInputChange, reset] = useForm({
    correo: "marces.ttblue@gmail.com",
    contraseña: "123456",
  });

  const { correo, contraseña } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(inicioLoginEmailContraseña(correo, contraseña));
    
  }

  const handleGoogleLogin = (e) => {
    
    dispatch(inicioGoogleLogin());
    
  }



  return (
    <>
      <h3 className="auth__titulo">Iniciar sesión</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Correo"
          name="correo"
          className="auth__input"
          autoComplete="off"
          value={correo}
          onChange={handleInputChange}
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          className="auth__input"
          autoComplete="off"
          value={contraseña}
          onChange={handleInputChange}
        ></input>

        <button type="submit" className="btn btn-primary btn-block">
          Acceder
        </button>

        <div className="auth__red-social">
          <p>Acceso con tu red social</p>

          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
            >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Iniciar con google</b>
            </p>
          </div>
        </div>

        <Link className="link" to="/auth/registro">
          Crear una cuenta nueva
        </Link>
      </form>
    </>
  );
};
export default LoginScreen;
