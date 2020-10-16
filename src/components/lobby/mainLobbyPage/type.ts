import { ObjectID } from "mongodb"
// export interface Lobby {
//     dormName : string,
//     roomType : string,
//     link : string,
// }

interface user {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
    ready : boolean,
    profilepic : number
}
interface chat {
    author : string,
    userID : string,
    message : string,
    time : Date
}

export interface Lobby {
    _id? : ObjectID
    dormName : string,
    roomType : string,
    owner : user,
    member : user[]
    chat : chat[]
    maxMember : number
}