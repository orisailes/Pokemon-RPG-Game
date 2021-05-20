import React from 'react'
import Button from './Button'
import {useHistory} from 'react-router-dom'
import '../../css/pre-disconnect.css'

const PreDisconnect = ({setPreDisconnect,mapRef}) => {

    const location = useHistory()
    return (
        <div
            className="pre-disconnect">
            <div className="pre-disconnect-grid">
                <div className="question">
                    <p> 
                        Are you sure you want to disconnect? <br></br> Dont worry, all game detail will be saved
                    </p>

                </div>


                <Button
                    text="yes"
                    onClick={() => {
                        setPreDisconnect(false)
                        location.push('/landing')
                    }}
                />
                <Button
                    text="no"
                    onClick={() => {
                        setPreDisconnect(false)
                        mapRef.current.focus()
                    }}
                />

            </div>

        </div>
    )
}

export default PreDisconnect
