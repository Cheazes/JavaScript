import React,{useState} from 'react'
import { deposit, withdraw } from '../action/moneyActions';
import {store } from '../store/configureStore'

const Operation = () => {
  const [sum,setSum] = useState(1);
  return (
    <div>
      <button onClick={() => store.dispatch(withdraw(sum))}>Withdrow
    </button>
    <input 
    onChange={e=> setSum(+e.target.value)}
    value={sum}
    type='number'
    />
    <button onClick={()=> store.dispatch(deposit(sum))}>Deposit</button>
    </div>
  )
}

export default Operation