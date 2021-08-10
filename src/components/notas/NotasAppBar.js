import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { guardarNota, startUploading } from '../../acciones/notas'

export const NotasAppBar = () => {

    const dispatch = useDispatch();
    const {notaActiva} = useSelector(state => state.notas)

    const handleSave = () => {
        dispatch(guardarNota(notaActiva));
    }

    const handleImageClick = () => {
        document.querySelector('#selectorArchivo').click();
    }

    const handleFileChange = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            dispatch(startUploading(archivo));
        }
        
        console.log(archivo)
    }

    return (
        <div className="notas__appbar">

            <span>9 julio 2021</span>

            <input
                id="selectorArchivo"
                type="file"
                name="file"
                style={{display: "none"}}
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handleImageClick}    
                >
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
