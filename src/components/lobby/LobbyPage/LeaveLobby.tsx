import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";

interface LeaveProps {
    handleLeave : () => void
}

const LeaveLobby = (props : LeaveProps) => {
    const {handleLeave} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        handleLeave()
    }
    return (
        <div>
            <button onClick={()=> {
                setShow(true)
            }}>Leave Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Leave"  />
        </div>
    )
}

export default LeaveLobby;