import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";
import LobbyService from "../../../services/lobby.service"
import { useSocket } from "../../../contexts/socket.context";
const token = {
  userID : "1",
  name : {
    firstName : "Chanokchon",
    lastName : "Chen"
  }
}

const CreatePage = () => {
  const socket = useSocket()
  const history = useHistory();
  const [form,setForm] = useState({dormName : "" , roomType:""})
  const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value
    setForm((prev) => {
        return {...prev , [name] : value}
    })
  }
  // const handleChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
  //   const name = e.target.name;
  //   const value = e.target.value
  //   setForm((prev) => {
  //       return {...prev , [name] : value}
  //   })
  // }
  const handleGoBack = () => {
    history.goBack();
  };
  const handleSubmit = async () => {
    const lobby = {...form,token,maxMember : 4} 
    const lobbyID : string = await LobbyService.createLobby(lobby)
    history.push(`/lobby/${lobbyID}`)
    socket.emit("addlobby")
  }
  return (
    <>
      <BackButton handleGoBack={handleGoBack} />
      <br />
      <form onSubmit={(e : React.ChangeEvent<HTMLFormElement>)=> {
          e.preventDefault();
          // make post request to add new lobby and get lobbyID back
          handleSubmit()
      }}>
      <label>Dorm Name</label>
      <br />
      <input name="dormName" value={form.dormName} onChange={handleChangeInput} placeholder="Enter Dorm Name" />
      <br />
      <label>Room Type</label>
      <br />
      {/* <select  value={form.roomType}  onChange={handleChangeSelect} name="roomType">
        <option value="hee">ห้อง ควย</option>
        <option value="kuy">ห้อง หี</option>
      </select> */}
      <input name="roomType" value={form.roomType} onChange={handleChangeInput} placeholder="Enter Room Type " />
      <br />
      <button type="submit">Create</button>
      <button onClick={handleGoBack}>Cancel</button>
      </form>
    </>
  );
};
export default CreatePage;
