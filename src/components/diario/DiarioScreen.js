import React from 'react';
import { Sidebar } from './Sidebar';

const DiarioScreen = () => {
    return (
        <div className="diario__main-content">
            
            <Sidebar/>

            <main>
                <h1>main content</h1>
            </main>

        </div>
    )
};

export default DiarioScreen;

