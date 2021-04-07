import React from 'react';
import { useState } from 'react';


function ProfilePic(props) {
    console.log(props.imgSrc);
    return ( 
        <>
            <img onChange={props.onChange} onClick={props.onClick} width={props.width} height={props.height} src={props.imgSrc} />
        </>
     );
}
 
export default ProfilePic;