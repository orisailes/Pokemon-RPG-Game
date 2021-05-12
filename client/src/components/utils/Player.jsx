import React from 'react'
import '../../css/player.css'
import WalkSprites from '../../img/character/movement/maleSprites.png'
import { SpriteSize } from '../../utils/constants/constants'

const Player = ({ position, forwardedRef,direction,walkIndex }) => {


    const y = 50
    const x = 50

    let xSpritePos = walkIndex * -1
    let ySpritePos = (direction === "SOUTH" ? 0 : direction === "NORTH" ? 1 : direction === "WEST" ? 2 : direction === "EAST" ? 3 : 0) *-1 
    
    return (
        <div
            style={{
                top: `calc(${x}vh + ${position[1]}vh)`,
                left: `calc(${y}vw + ${position[0]}vw)`,
                backgroundImage: `url(${WalkSprites})`,
                backgroundPosition: `${SpriteSize.width * xSpritePos}px ${(20 + SpriteSize.height) * ySpritePos}px`, //  X Y
                height: `${SpriteSize.height}px`,
                width: `${SpriteSize.width}px`,

            }}
            ref={forwardedRef}
            className="player">

        </div>
    )
}

export default Player