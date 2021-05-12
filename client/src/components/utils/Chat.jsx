import React from 'react'
import '../../css/chat.css'
const Chat = ({ text, closeStore }) => {




    return (
        <>
            <div
                className="chat-box">
                    <p>
                        {text}
                    </p>
            </div>
        </>
    )

}

export default Chat