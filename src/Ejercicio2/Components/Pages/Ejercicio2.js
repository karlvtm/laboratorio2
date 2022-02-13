import React from "react";
import { useState } from "react";

import './Ejercicio2.css';

const Ejercicio2 = () =>{
    let [botonazo, setBotonazo] = useState(0);

    const buttonClickHandler = () =>{
        setBotonazo(botonazo += 1)
    }

    return(
        <ul className="centro">
            <li>
                <h1>{botonazo===1? `Me han clickeado ${botonazo} vez!`:`Me han clickeado ${botonazo} veces!`}</h1>
            </li>
            <li>
                <button onClick={buttonClickHandler} className="botonEj1">Haz click aqui</button>
            </li>
        </ul>
    );
}

export default Ejercicio2;