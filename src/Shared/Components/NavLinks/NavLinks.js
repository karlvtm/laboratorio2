import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = (props) =>{
    return(
        <ul className="links">
            <li>
                <NavLink to="/" exact>Ejercicio 1</NavLink>
            </li>
            <li>
                <NavLink to="/ej2">Ejercicio 2</NavLink>
            </li>
            <li>
                <NavLink to="/ej3">Ejercicio 3</NavLink>
            </li>
            <li>
                <NavLink to="/ej4">Ejercicio 4</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;
