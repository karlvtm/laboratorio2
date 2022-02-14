import React from "react";
import { useState } from "react";

import './Ejercicio2.css';

const Ejercicio2 = () =>{
    let [botonazo, setBotonazo] = useState(0);

    const buttonClickHandler = () =>{
        setBotonazo(botonazo += 1)
    }

    return(
        <table className="centro">
            <tbody>
                <tr>
                    <td>
                        <h1>{botonazo===1? `Me han clickeado ${botonazo} vez!`:`Me han clickeado ${botonazo} veces!`}</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={buttonClickHandler} className="botonEj2">Haz click aqui</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Ejercicio2;