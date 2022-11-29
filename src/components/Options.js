import React, { useState } from 'react';
import Actividades from './Actividades';
import Sistema from './Sistema';
import Codigo from './CodigoFuente';
import Reporte from './Reporte';


const Options = ()  => {
    const [component, setComponent] = useState(<h1 className="selecciona">Selecciona un botón</h1>)

    const handleClick = (e) => {
        if (e.target.value === "Actividades realizadas en el curso") {
            setComponent(<Actividades />)
        }
        if (e.target.value === "Sistema implementado") {
            setComponent(<Sistema />)
        }
        if (e.target.value === "Código fuente") {
            setComponent(<Codigo />)
        }
        if (e.target.value === "Modificaciones realizadas") {
            setComponent(<Reporte />)
        }

        return <h1>Selecciona un botón</h1>
    }
    return (
        <div>
            <div className="links-container">
            <input type="button" value="Actividades realizadas en el curso" onClick={handleClick}></input>
            <input type="button" value="Sistema implementado" onClick={handleClick}></input>
            <input type="button" value="Código fuente" onClick={handleClick}></input>
            <input type="button" value="Modificaciones realizadas" onClick={handleClick}></input>
            </div>
            {component}
        </div>
    )
}

export default Options