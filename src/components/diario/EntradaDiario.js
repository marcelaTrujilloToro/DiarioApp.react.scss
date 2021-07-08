import React from 'react';
import { DiarioEntrada } from './DiarioEntrada';

export const EntradasDiario = () => {

    const entradas = [1,2,3,4,5];

    return (
        <div className="diario__entradas">
            {
                entradas.map(value =>(
                    <DiarioEntrada key={value}/>
                ))
            }
        </div>
    )
}
