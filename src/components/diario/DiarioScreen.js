import React from 'react';
import { useSelector } from 'react-redux';
import { NotaScreen } from '../notas/NotaScreen';
import { Sidebar } from './Sidebar';
import { NadaSeleccionado } from './NadaSeleccionado';

const DiarioScreen = () => {

    //  extraer algo del store (useSelector)
    const {notaActiva} = useSelector(state => state.notas)
    

    return (
        <div className="diario__main-content">
            
            <Sidebar/>

            <main>

                {
                    (notaActiva)
                    ? (<NotaScreen/>)
                    : (<NadaSeleccionado/>)
                }
            </main>

        </div>
    )
};

export default DiarioScreen;

