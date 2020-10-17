import React from "react";

interface ChatProps {
    handleGoChatPage : () => void
}

const ChatRoom = (props : ChatProps) => {
    const {handleGoChatPage} = props
    return (
        <button onClick={handleGoChatPage}>Chat Room</button>
    )
}

export default ChatRoom