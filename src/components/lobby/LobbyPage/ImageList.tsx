import React, { useEffect, useState } from "react";
import Image from "./Image"

interface user {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    },
    profilepic : number,
    ready : boolean
}

interface ImageProps {
    member : user[] ,
    maxMember : number
}


const ImageList = (props : ImageProps) => {

    const {member,maxMember} = props
    const [space ,setSpace] = useState<number[]>([])
    const remainPerson = maxMember  - member.length
    const temps : number[] = []
    const handleRemain = () => {

        for (let i = 0 ; i < remainPerson ; i++) {
            temps.push(i)
        }
        setSpace(temps)
    } 
    useEffect(()=> {
        handleRemain()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[member])
    return (
        <div>
            {member.map((user,index) => {
                return <Image attr={user} key={index} />
            })}
            {space.map((temp,index) => {
                return <img alt="" key={index} style={{margin:"2%",border:"10px solid #000",width:"200px",height:"200px"}} />
            })}

        </div>
    )
}
export default ImageList;