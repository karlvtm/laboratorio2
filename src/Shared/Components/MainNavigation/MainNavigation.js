import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader.js";
import NavLinks from "../NavLinks/NavLinks.js";

const MainNavigation = (props) =>{
    return(
        <MainHeader>
            <h1 className="main_header_titulo">
                Laboratorio 2- 20002189
            </h1>

            <nav>
                <NavLinks/>
            </nav>
        </MainHeader>
    );
}

export default MainNavigation;