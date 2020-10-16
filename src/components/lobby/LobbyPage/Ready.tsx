import React  from "react";
//database ้add readystate to all user

interface ReadyProps {
    handleReady : () => void,
    text : string
}

const Ready = (props : ReadyProps) => {
    const {handleReady,text} = props
    return (
        <button onClick={handleReady}>{text}</button>
    )
}

export default Ready;