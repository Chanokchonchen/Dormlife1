import React, { useState } from "react";
import ModalCheckup from "./ModalCheckup";

interface CloseLobby {
    handleCloseLobby : () => void,
    disable : boolean

}

const CloseLobby = (props : CloseLobby) => {
    const {handleCloseLobby,disable} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        handleCloseLobby()
    }
    return (
        <>
            <button disabled={disable}  onClick={()=> {
                setShow(true)
            }} >Close Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Close"  />
        </>
    )
}

export default CloseLobby;