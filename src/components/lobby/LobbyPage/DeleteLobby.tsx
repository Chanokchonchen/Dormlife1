import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";
import { useHistory } from "react-router-dom";

const DeleteLobby = () => {
    const [show,setShow] = useState<boolean>(false)
    const history = useHistory()
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete Lobby
        alert("Delete")
        history.replace("/")
    }
    return (
        <div>
            <button onClick={()=> {
                setShow(true)
            }}>Delete Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Delete"  />
        </div>
    )
}

export default DeleteLobby;