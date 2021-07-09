import React from 'react';
import { NotasAppBar } from './NotasAppBar';

export const NotaScreen = () => {
    return (
        <div className="notas__main-content">
            <NotasAppBar/>

            <div className="notas__content">
                <input 
                    type="text"
                    placeholder="Titulo de tu nota"
                    className="notas__titulo-input"
                    autoComplete="off"
                >
                </input>

                <textarea
                    placeholder="¿Qué paso hoy?"
                    className="notas__textarea"
                >

                </textarea>

                <div className="notas__imagen">
                    <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" alt="imagen">
                    </img>
                </div>

            </div>
        </div>
    )
}
