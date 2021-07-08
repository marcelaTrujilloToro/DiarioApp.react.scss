import React from 'react';
import { EntradasDiario } from './EntradaDiario';

export const Sidebar = () => {
    return (
        <aside className="diario__sidebar">

            <div className="diario__sidebar-navbar">

                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Marcela</span>
                </h3>
                <button className="btn">Cerrar sesión</button>

            </div>


            <div className="diario__nueva-entrada">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">Nueva entrada</p>
            </div>

            <EntradasDiario/>

        </aside>
    )
}
