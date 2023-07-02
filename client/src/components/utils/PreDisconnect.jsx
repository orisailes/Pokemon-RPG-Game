import React from 'react'
import Button from './Button'
import {useHistory} from 'react-router-dom'

const PreDisconnect = ({setPreDisconnect,mapRef}) => {

    const location = useHistory()
    return (
        <div
            className="chat-box">
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
                    showArrow={false}
                />
                <Button
                    text="no"
                    onClick={() => {
                        setPreDisconnect(false)
                        mapRef.current.focus()
                    }}
                    showArrow={false}
                />

            </div>

        </div>
    )
}

export default PreDisconnect
