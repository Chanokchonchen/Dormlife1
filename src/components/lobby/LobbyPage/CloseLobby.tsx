import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";
import { useHistory } from "react-router-dom";


const CloseLobby = () => {
    const [show,setShow] = useState<boolean>(false)
    const history = useHistory()
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete Lobby
        alert("Close")
        history.replace("/")
    }
    return (
        <>
            <button onClick={()=> {
                setShow(true)
            }} >Close Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Close"  />
        </>
    )
}

export default CloseLobby;