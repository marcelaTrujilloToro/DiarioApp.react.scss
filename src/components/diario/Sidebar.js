import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../acciones/auth';
import { startNewNote } from '../../acciones/notas';
import { EntradasDiario } from './EntradaDiario';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const {name} = useSelector(state => state.auth )

    const handleLogout = () => {
       dispatch(startLogout())
    }


    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="diario__sidebar">

            <div className="diario__sidebar-navbar">

                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span>{name}</span>
                </h3>
                <button className="btn"
                    onClick={handleLogout}
                >Cerrar sesión</button>

            </div>


            <div 
                className="diario__nueva-entrada"
                onClick={handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">Nueva entrada</p>
            </div>

            <EntradasDiario/>

        </aside>
    )
}
