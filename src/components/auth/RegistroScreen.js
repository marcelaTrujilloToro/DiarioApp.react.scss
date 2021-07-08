import React from 'react';
import {Link} from 'react-router-dom';

const RegistroScreen = () => {
    return (
        <>
      <h3 className="auth__titulo">Registro nuevo usuario</h3>

      <form>
        <input type="text" placeholder="Nombre" name="nombre" className="auth__input" autoComplete="off"></input>
        <input type="text" placeholder="Correo" name="email" className="auth__input" autoComplete="off"></input>
        <input type="password" placeholder="Contraseña" name="password" className="auth__input" autoComplete="off"></input>
        <input type="password" placeholder="Confirmar contraseña" name="password2" className="auth__input" autoComplete="off"></input>

        <button type="submit" className="btn btn-primary btn-block mb-5">Registrarse</button>
    

        <Link className="link" to="/auth/login">
            Ya estas registrado?
        </Link>
      </form>
    </>
    )
};
export default RegistroScreen;
