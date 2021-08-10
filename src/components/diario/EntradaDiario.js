import React from 'react';
import {useSelector} from 'react-redux'
import { DiarioEntrada } from './DiarioEntrada';

export const EntradasDiario = () => {

    const {notas} =  useSelector(state => state.notas);
  
        
        return (
        <div className="diario__entradas">
            {
                notas?.map(nota =>(
                    <DiarioEntrada 
                        key={nota.id}
                        {...nota}
                    />
                ))
            }
        </div>
    )
}
