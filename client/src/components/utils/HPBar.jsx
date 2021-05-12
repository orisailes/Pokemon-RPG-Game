import React from 'react';


function HPBar({ hp, maxHp }) {
    const progress= `${Math.floor(hp/maxHp*100)}%`
    return (
        <>
            <div className="hp-bar" >
                <div className="progress" style={{width:progress}}/>
            </div>
            <p>{hp}/{maxHp}</p>
        </>
    )
}

export default HPBar