import React from "react";

import './UserList.css';
import Info from "../Info/Info.js";

const UserList = (props) =>{
    return(
        <table>
            <tbody>
                {props.items.map(user=>{
                    return(
                        <Info
                            key={user.id}
                            image={user.image}
                            name={user.name}
                            date={user.date}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}

export default UserList;