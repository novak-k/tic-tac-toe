import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditng] = useState(false);

  function handleEditing(){
    // setIsEditng(!isEditing); //doesnt update it just a shcedule update // NOT recommended way 
    setIsEditng((editing) => !editing); // best practice way 

    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
  }

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
      
   </li>
  )
}
