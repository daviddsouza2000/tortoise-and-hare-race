import './Position.css';
import React from 'react';
import tortoisePic from './tortoise.jpg';
import harePic from './thumper.png';
import tortoiseplushare from './tortoiseplushare.png';

export default function Position({ num, hasHare=false, hasTortoise=false }) {
    var pos;
    if (hasHare && hasTortoise) pos = <img src={tortoiseplushare} alt="H" />;
    else if (hasHare) pos = <img src={harePic} alt="H" />;
    else if (hasTortoise) pos = <img src={tortoisePic} alt="T" />;
    else if (num %5 === 0) pos = num;
    return (
        <div className="square">
            {pos}
        </div>
    )
}
