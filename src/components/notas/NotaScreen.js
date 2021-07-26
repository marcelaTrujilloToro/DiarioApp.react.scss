import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activarNota } from "../../acciones/notas";
import { useForm } from "../../hooks/useForm";
import { NotasAppBar } from "./NotasAppBar";

export const NotaScreen = () => {

  const dispatch = useDispatch();

  const { notaActiva:note } = useSelector( state => state.notas );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { cuerpo, titulo, id } = formValues;

  const activeId = useRef( note.id );

  useEffect(() => {
      
      if ( note.id !== activeId.current ) {
          reset( note );
          activeId.current = note.id
      }

  }, [note, reset])

  useEffect(() => {
      
      dispatch( activarNota( formValues.id, { ...formValues } ) );

  }, [formValues, dispatch])

  return (
    <div className="notas__main-content">
      <NotasAppBar />

      <div className="notas__content">
        <input
          type="text"
          name="titulo"
          placeholder="Titulo de tu nota"
          className="notas__titulo-input"
          autoComplete="off"
          value={titulo}
          onChange={handleInputChange}
        ></input>

        <textarea
          placeholder="¿Qué paso hoy?"
          name="cuerpo"
          className="notas__textarea"
          value={cuerpo}
          onChange={handleInputChange}
        ></textarea>

        {
          (note.url)  && (
          <div className="notas__imagen">
            <img
              src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
              alt="imagen"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};
