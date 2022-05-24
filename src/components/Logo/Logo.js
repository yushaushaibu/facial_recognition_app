import React from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import AI from './AI.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 140 }} >
                <div className="Tilt-inner pa3"> 
                    <img alt="logo" src={AI} style={{paddingTop: '19px'}} /> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;