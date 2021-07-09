import React from "react";
import { Link } from "react-router-dom";
import validator from 'validator'
import { useForm } from "../../hooks/useForm";

const RegistroScreen = () => {

  const [values, handleInputChange, reset] = useForm({
    nombre: 'Marcela Trujillo Toro',
    correo: "marces.ttblue@gmail.com",
    contraseña: "123456",
    contraseña2: '123456'
  });

  const { nombre, correo, contraseña, contraseña2 } = values;

  const handleLogin = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      console.log("formulario ok");
    };
    
  };

  const validarFormulario = () => {

    if (nombre.trim().length === 0) {
      console.log("nombre es requerido");
      return false;

    }else if (!validator.isEmail (correo)) {
      console.log("Correo no valido")
      return false;
    
    }else if (contraseña !== contraseña2 || contraseña.length < 5) {
      console.log("la contr")
      return false;
    }

    return true;
  };


  return (
    <>
      <h3 className="auth__titulo">Registro nuevo usuario</h3>

      <form onSubmit={handleLogin}>

        <div className="auth__alerta-error">
          Hola mundo
        </div>

        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="auth__input"
          autoComplete="off"
          value={nombre}
          onChange={handleInputChange}
        ></input>
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
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="contraseña2"
          className="auth__input"
          autoComplete="off"
          value={contraseña2}
          onChange={handleInputChange}
        ></input>

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registrarse
        </button>

        <Link className="link" to="/auth/login">
          Ya estas registrado?
        </Link>
      </form>
    </>
  );
};
export default RegistroScreen;
