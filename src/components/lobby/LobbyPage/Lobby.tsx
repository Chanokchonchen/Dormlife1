import React, { useEffect, useState } from "react";
import HomeButton from "./HomeButton";
import { useHistory ,useParams } from "react-router-dom";
import CloseLobby from "./CloseLobby";
import DeleteLobby from "./DeleteLobby";
import LeaveLobby from "./LeaveLobby";
import Ready from "./Ready"
import ImageList from "./ImageList";
import ChatRoom from "./ChatRoom";
import { Lobby } from "../mainLobbyPage/type";
import lobbyService from "../../../services/lobby.service";
import io from "socket.io-client";
const SOCKET_IO_URL = "http://localhost:2000";
const socket = io(SOCKET_IO_URL);
const LobbyPage = () => {
    const history = useHistory();
    const initialstate : Lobby = {
        owner : {
            userID : "",
            name : {
                firstName : "",
                lastName : ""
            },
            profilepic : 0,
            ready : false
        },
        member : [],
        dormName : "",
        maxMember : 0,
        roomType : "",
        chat : []
    }

    const [lobbyInfo,setLobbyInfo] =  useState<Lobby>(initialstate)
    const {lobbyID,userID} : {lobbyID:string,userID:string} = useParams();
    var currentUser = {
            userID : "",
            name : {
                firstName : "",
                lastName : ""
            }
    }
    if (userID === "1") {
        currentUser = {
            userID : "1",
            name : {
                firstName : "Chanokchon",
                lastName : "Chen"
            }
        }
    } else {
        currentUser = {
            userID : "2",
            name : {
                firstName : "Prangthip",
                lastName : "Chen"
            }
        }        
    }
    const handleGoHome = () => {
        history.push("/")
    }
    const handleReady = async () => {
        await setLobbyReadyInfo()
        socket.emit("ready")
    }
    const getLobbyInfo = async () => {
        const lobby = await lobbyService.getSpecificLobby(lobbyID)
        setLobbyInfo(lobby)
    }
    const setLobbyReadyInfo = async () => {
        const lobby = await lobbyService.setReady(lobbyID,currentUser.userID)
        setLobbyInfo(lobby)
    }

    useEffect(() => {
        getLobbyInfo()
        socket.emit("join")
        socket.on("join",()=> {
            getLobbyInfo()
        })
        socket.on("ready",()=> {
            getLobbyInfo()
        })
        //getRequest with lobbyID
        //result form get request axios
        //setLobbyInfo(result)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <HomeButton handleGoHome={handleGoHome} />
            <h1>{lobbyInfo.dormName} {lobbyInfo.roomType}</h1>
            <p>Lobby ID {lobbyID}</p>
            <ImageList maxMember={lobbyInfo.maxMember} member={lobbyInfo.member}  />
            { (lobbyInfo.owner.userID === currentUser.userID) ? <CloseLobby />  : <>
            {lobbyInfo.member.find((mem => {
                return mem.userID === currentUser.userID
            }))?.ready ? <Ready text="Unready" handleReady={handleReady} /> : <Ready text="Ready" handleReady={handleReady} /> }
            </> }
            { lobbyInfo.owner.userID === currentUser.userID ? <DeleteLobby /> : <LeaveLobby />}
            <ChatRoom />
        </>
    )
}

export default LobbyPage;