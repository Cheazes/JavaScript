import React, { useState } from 'react'
import{game} from '../utils/contants'

const Start = ({changeName, changePage}) => {
  const [name,setName] = useState('');
    
  const handleChangeName = e => {
    setName(e.target.value.trim().toUpperCase());
  }
  const handleClickStart = () => {
    changePage(game);
    changeName(name);
  }

    return (
      <div>
        <h1>Ready For War</h1>
        <input onChange={handleChangeName} type='text' placeholder='Enter your name' />
        <button onClick={handleClickStart}>Start</button>
      </div>
    )
  }



export default Start