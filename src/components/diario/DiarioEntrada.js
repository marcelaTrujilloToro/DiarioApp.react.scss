import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activarNota } from '../../acciones/notas';

export const DiarioEntrada = ({id, fecha, titulo, cuerpo, url}) => {

    const fechaNota = moment(fecha);
    const dispatch = useDispatch();

    const handleEntradaClick = () => {
        dispatch(activarNota(id, {
            fecha, titulo, cuerpo, url
        }))
    }
    

    return (
        <div 
            className="diario__entrada pointer"
            onClick={handleEntradaClick }    
        >

           { 
                url &&
                <div 
                    className="diario__entrada-imagen" 
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}>

                </div>
            
            }

            <div 
                className="diario__entrada-body">
                <p className="diario__entrada-titulo">{titulo}</p>
                <p className="diario__entrada-contenido">{cuerpo}</p>
            </div>

            <div className="diario__fecha">
                <span>{fechaNota.format('dddd')}</span>
                <h4>{fechaNota.format('Do')}</h4>
            </div>
            
        </div>
    )
}
