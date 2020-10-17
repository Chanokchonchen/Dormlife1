import React from "react";

interface ChatListProps {
    children: React.ReactNode
}

const ChatList = (props : ChatListProps) => {
    const {children} = props
    return (
        <div className="chats">
            {children}
        </div>
        
    )
}
export default ChatList