import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";

interface DeleteProps {
    handleDelete : () => void
}

const DeleteLobby = (props : DeleteProps) => {
    const {handleDelete} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete Lobby
        handleDelete()
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