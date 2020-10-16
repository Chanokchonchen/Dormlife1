import React, { useEffect } from "react";
import { ObjectID } from "mongodb"
import { useHistory } from "react-router-dom";
import lobbyService from "../../../services/lobby.service";
interface lobbyProps {
    dormName : string,
    roomType : string,
    _id? : ObjectID
}

const token = {
    userID : "2",
    name : {
        firstName : "Prangthip",
        lastName : "Chen"
    }
}

const LobbyRow = (props : lobbyProps) => {

    const {dormName,roomType,_id} = props
    const history = useHistory()
    return (
        <div style={{width : "300px" , height : "50px" , border:"10px solid #555"}}>
            <a onClick={async ()=> {
                const param = {
                    id : _id,
                    token : token
                }
                await lobbyService.joinLobby(param)
                history.push(`/lobby/${_id}`)
            }}><p>{dormName}, {roomType}</p></a>
        </div>
    )
}
export default LobbyRow;