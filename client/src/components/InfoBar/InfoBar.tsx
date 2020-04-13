import React from 'react';

import closeIcon from '../../assets/icons/closeIcon.png';
import openIcon from '../../assets/icons/openIcon.png';

import './InfoBar.scss';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src="{onlineIcon}" alt="" className="onlineIcon"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" /></a>
            </div>
        </div>
    )
}

export default InfoBar;