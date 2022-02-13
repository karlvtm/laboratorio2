import React from "react";

import './Ejercicio3.css'
import UserList from "../UserList/UserList.js";

const Ejercicio3 = () =>{
    const persona = [
        {
            id: '1',
            name: 'Juan Pérez',
            date: '12/05/1980',
            image: 'https://fotos01.noticiasdenavarra.com/2021/12/29/690x278/beloqui.jpg'
        },
        {
            id: '2',
            name: 'Juan Pérez',
            date: '12/05/1980',
            image: 'https://fotos01.noticiasdenavarra.com/2021/12/29/690x278/beloqui.jpg'
        }
    ];

    return(
        <UserList items={persona}/>
    );

}

export default Ejercicio3;