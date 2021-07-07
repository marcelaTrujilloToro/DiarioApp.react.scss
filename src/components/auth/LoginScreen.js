import React from "react";
import {Link} from 'react-router-dom';

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__titulo">Iniciar sesión</h3>

      <form>
        <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off"></input>
        <input type="password" placeholder="Password" name="password" className="auth__input" autoComplete="off"></input>

        <button type="submit" className="btn btn-primary btn-block">Acceder</button>
    

        <div className="auth__red-social">

          <p>Acceso con tu red social</p>

          <div className="google-btn">
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

        <Link to="/auth/registro">
            Crear una cuenta nueva
        </Link>
      </form>
    </>
  );
};
export default LoginScreen;
