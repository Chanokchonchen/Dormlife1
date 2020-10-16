import axios from "axios";
import { ObjectID } from "mongodb"
const API_URL = "http://localhost:2000/lobbies/"

interface token {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
}

interface propsCreateLobby {
    maxMember : number
    dormName : string,
    roomType : string
    token : token
    //ควรเป็น dormName เพราะรับมาเป็น dormName
}

interface propsJoinLobby {
    token : token,
    id? : ObjectID
}

async function getLobbys() {
    const result = await axios.get(`${API_URL}`)
    return result.data
}
async function createLobby(form : propsCreateLobby) {
    const result = await axios.post(`${API_URL}`,form)
    return result.data
}

async function joinLobby(form : propsJoinLobby) {
    const {token , id} = form
    const result = await axios.post(`${API_URL}${id}/join`,token)
    return result

}

async function getSpecificLobby(id : string) {
    const result = await axios.get(`${API_URL}${id}`)
    return result.data
}
async function setReady(id : string,userID : string) {
    const result = await axios.post(`${API_URL}${id}/ready`,{userID : userID})
    return result.data
}

export default {
    getLobbys,
    createLobby,
    joinLobby,
    getSpecificLobby,
    setReady
}