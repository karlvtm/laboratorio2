import React from "react";

import './ProfilePic.css';

const ProfilePic = (props) =>{
    return(
        <div className="profile" style={props.style}>
            <img
                src={props.image}
                alt={props.alt}
                style={{width: props.width, height: props.height}}
            />
        </div>
    );
}

export default ProfilePic;