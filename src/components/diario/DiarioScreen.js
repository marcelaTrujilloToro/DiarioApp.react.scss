import React from 'react';
import { NotaScreen } from '../notas/NotaScreen';
import { Sidebar } from './Sidebar';
// import { NadaSeleccionado } from './NadaSeleccionado';

const DiarioScreen = () => {
    return (
        <div className="diario__main-content">
            
            <Sidebar/>

            <main>
                {/* <NadaSeleccionado/> */}
                <NotaScreen/>
            </main>

        </div>
    )
};

export default DiarioScreen;

