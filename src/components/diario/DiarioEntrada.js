import React from 'react'

export const DiarioEntrada = () => {
    return (
        <div className="diario__entrada pointer">
            <div 
                className="diario__entrada-imagen" 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://as.com/epik/imagenes/2021/01/12/portada/1610475996_695462_1610476105_sumario_normal.jpg)'
                }}>

            </div>

            <div className="diario__entrada-body">
                <p className="diario__entrada-titulo">Un nuevo dia</p>
                <p className="diario__entrada-contenido">asdfadf asdfadsfafasdf adsdfsd fgerf</p>
            </div>

            <div className="diario__fecha">
                <span>Sabado</span>
                <h4>08</h4>
            </div>
            
        </div>
    )
}
