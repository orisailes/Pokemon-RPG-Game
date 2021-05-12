import React from 'react'
import { TileSize } from '../../utils/constants/constants'
import '../../css/mapTile.css'

const Tile = ({ tile }) => {

    let className = ''


    switch (tile) {
        case -1:
            className = "front-fence"
            break;
        case -11:
            className = "back-fence"
            break;
        case -2:
            className = "left-side-fence"
            break;
        case -22:
            className = "right-side-fence"
            break;
        case 3:
            className = "trail"
            break;
        case -4:
            className = "rock"
            break;
        case 5:
            className = "grass"
            break;
        case 1:
            className = "enemy-grass"
            break;
        case -7:
            className = "tree"
            break;
        case 8:
            className = "half-grass"
            break;
        case 9:
            className = "mushroom"
            break;
        case -40:
            className = "rock-on-grass"
            break;
        case -70:
            className = "tree-on-grass"
            break;
        case 80:
            className = "half-grass-on-grass"
            break;
        case 90:
            className = "mushroom-on-grass"
            break;
        case -101:
            className = "nurse"
            break;
        case -200:
            className = "oak"
            break;
        default:
            break;
    }

    return (
        <div
            className={className}
            style={{
                height: `${TileSize.height}vh`,
                width: `${TileSize.width}vw`,
                display: "inline-flex"
            }}
        >

        </div>
    )
}

export default Tile