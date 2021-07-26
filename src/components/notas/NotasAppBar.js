import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { guardarNota } from '../../acciones/notas'

export const NotasAppBar = () => {

    const dispatch = useDispatch();
    const {notaActiva} = useSelector(state => state.notas)

    const handleSave = () => {
        dispatch(guardarNota(notaActiva));
    }

    return (
        <div className="notas__appbar">

            <span>9 julio 2021</span>

            <div>
                <button className="btn">
                    Imagen
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Guardar
                </button>
                
            </div>
        </div>
    )
}
