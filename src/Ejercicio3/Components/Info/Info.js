import React from "react";

import './Info.css';
import Card from "../Cards/Card.js";
import ProfilePic from "../ProfilePic/ProfilePic.js";

const Info = (props) =>{
    return(
        <tr>
            <td>
                <Card>
                    <div>
                        <ProfilePic image={props.image} alt={props.name}/>
                        <p>{props.name}</p>
                        <p>{props.date}</p>
                        <button>Connect</button>
                    </div>
                </Card>
            </td>
        </tr>
    );
}

export default Info;