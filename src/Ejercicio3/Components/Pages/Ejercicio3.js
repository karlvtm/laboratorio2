import React from "react";

import './Ejercicio3.css'
import UserList from "../UserList/UserList.js";

const Ejercicio3 = () =>{
    const persona = [
        {
            id: '1',
            name: 'Juan Pérez',
            date: '12/05/1985',
            image: 'https://fotos01.noticiasdenavarra.com/2021/12/29/690x278/beloqui.jpg'
        },
        {
            id: '2',
            name: 'Sarah Winters',
            date: '30/04/1994',
            image: 'https://www.wigalorthodontics.com/assets/images/wig_image1.jpg'
            
        },
        {
            id: '3',
            name: 'Mark Johnson',
            date: '08/08/1990',
            image: 'https://www.wigalorthodontics.com/assets/images/gallery-15.jpg'
        },
        {
            id: '3',
            name: 'Nina Ruano',
            date: '11/10/1995',
            image: 'https://www.wigalorthodontics.com/assets/images/1125-1.jpg'
        }
    ];

    return(
        <div className="display">
            <UserList items={persona}/>
        </div>
    );

}

export default Ejercicio3;