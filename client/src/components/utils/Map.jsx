import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../css/map.css'
import Player from '../utils/Player'
import MapView from './MapView'
import { TileSize } from '../../utils/constants/constants'


const Map = ({ tiles, toggleMap, toggleChat, sounds, isCharacterInHome, forwardedRef,musicOff }) => {

    const [playerPosition, setPlayerPosition] = useState([0, 0]) // moving player in vh&vw
    const [playerArrayPosition, setPlayerArrayPosition] = useState([7, 19]) // moving player in matrix
    const [userMeetEnemy, setUserMeetEnemy] = useState(false)
    const [direction, setDirection] = useState('SOUTH')
    const [walkIndex, setWalkIndex] = useState(0)

    const playerRef = useRef()
    const location = useHistory()

    useEffect(() => {

        if(!musicOff){
            isCharacterInHome ? sounds.homeSound.on() : sounds.forestSound.on()
        }
        
        return () => {
            sounds.forestSound.off()
        }
    }, [])


    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleKeyDown = async (e) => {
        e.preventDefault()
        if (e.repeat) {
            await wait(75)
        }

        e.keyCode === 32 && checkIfTalking()
        let direction =
            (e.keyCode === 37 || e.keyCode === 65) ?
                'WEST' //left
                :
                (e.keyCode === 38 || e.keyCode === 87) ?
                    'NORTH'
                    :
                    (e.keyCode === 39 || e.keyCode === 68) ?
                        'EAST' //right
                        :
                        (e.keyCode === 40 || e.keyCode === 83) ?
                            'SOUTH'
                            :
                            null


        if (direction) {
            setDirection(direction)
            let helper = walkIndex
            helper++
            helper < 4 ? setWalkIndex(helper) : setWalkIndex(0)
        }
        if (direction === "WEST") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0] - TileSize.width, playerPosition[1]]
                newPosition[0] < -48 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "NORTH") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0], playerPosition[1] - TileSize.height]
                newPosition[1] < -40 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "EAST") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0] + TileSize.width, playerPosition[1]]
                newPosition[0] >= 45 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "SOUTH") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0], playerPosition[1] + TileSize.height]
                newPosition[1] >= 40 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

    }

    const changePlayerArrayPositionifValid = (direction) => {

        let helper = [...playerArrayPosition]
        direction === "SOUTH" ? helper[0]++ :
            direction === "NORTH" ? helper[0]-- :
                direction === "WEST" ? helper[1]-- :
                    direction === "EAST" && helper[1]++


        switch (true) {
            case (tiles[helper[0]][helper[1]] < 0): // negative value = block
                return false
            case (!tiles[helper[0]][helper[1]]): // if null -> map is changed
                toggleMap()
                setPlayerArrayPosition([7, 19])
                setPlayerPosition([0, 0])
                return false
            case (tiles[helper[0]][helper[1]] === 1):
                //! handle enemy meeting
                if (Math.random() > 0.92) {
                    setUserMeetEnemy(true)
                    !musicOff && sounds.forestSound.off()
                    !musicOff && sounds.battleSound.on()
                    location.push('/battle')
                }
                setPlayerArrayPosition(helper) // new position saved
                break;
            default:
                setPlayerArrayPosition(helper) // in case user make valid move, new position saved
                break;
        }
        return true
    }



    const checkIfTalking = () => {
        const specialCharacters = [-101, -200]
        const up = playerArrayPosition[0] - 1
        const down = playerArrayPosition[0] + 1
        const thisLine = playerArrayPosition[0]
        if (
            tiles[up].includes(specialCharacters[0]) ||
            tiles[up].includes(specialCharacters[1])
        ) {
            if (tiles[up][playerArrayPosition[1]] === -200) toggleChat('oak')
            if (tiles[up][playerArrayPosition[1]] === -101) toggleChat('nurse')
        }
        if (
            tiles[down].includes(specialCharacters[0]) ||
            tiles[down].includes(specialCharacters[1])
        ) {

            if (tiles[down][playerArrayPosition[1]] === -200) toggleChat('oak')
            if (tiles[down][playerArrayPosition[1]] === -101) toggleChat('nurse')
        }
        if (
            tiles[thisLine].includes(specialCharacters[0]) ||
            tiles[thisLine].includes(specialCharacters[1])
        ) {
            if (
                (tiles[thisLine][playerArrayPosition[1] - 1] === -200) ||
                (tiles[thisLine][playerArrayPosition[1] + 1] === -200)) toggleChat('oak')
            if (
                (tiles[thisLine][playerArrayPosition[1] - 1] === -101) ||
                (tiles[thisLine][playerArrayPosition[1] + 1] === -101)) toggleChat('nurse')

        }
    }

    return (
        <>
            <div
                ref={forwardedRef}
                autoFocus 
                tabIndex="0"
                onKeyDown={
                    !userMeetEnemy ?
                        (e) => handleKeyDown(e)
                        :
                        null
                }
                className="map"
                style={{
                    height: "100vh",
                    width: "100vw",
                    top: -playerPosition[1] * 4,
                    left: -playerPosition[0] * 4,
                }}
            >
                <MapView tiles={tiles} />
                <Player walkIndex={walkIndex} direction={direction} forwardedRef={playerRef} position={playerPosition} />

            </div>
            
        </>
    )
}

export default Map