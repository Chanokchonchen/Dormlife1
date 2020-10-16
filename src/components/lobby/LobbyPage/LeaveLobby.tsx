import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";
import { useHistory } from "react-router-dom";

const LeaveLobby = () => {
    const [show,setShow] = useState<boolean>(false)
    const history = useHistory()
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete membet in lobby
        alert("Leave")
        history.replace("/lobby")
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