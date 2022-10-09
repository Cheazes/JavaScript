import React, { useEffect, useRef, useState } from 'react'
import { creatDeck, result } from '../utils/contants'


const Game = ({changePage,getScore,nickName}) => {
  const [compCard,setCompCard] = useState('Computer card');
   const [playerCard, setPlayerCard]= useState('Player card');

   const compDeck = useRef ([]);
   const playerDeck = useRef ([]);
   const compWin = useRef ( 0 );
   const  playerWin = useRef ( 0 );
 
   const handleClickNext = () => {
    if (playerDeck.current.length) {
      const comp = compDeck.current.pop();
      const player = playerDeck.current.pop();
      if (comp.rank > player.rank) {
       compWin.current++;
      }
      if (comp.rank < player.rank) {
        playerWin.current++;
      }
      setPlayerCard(`${player.rank}, ${player.suit}`)
      setCompCard(`${comp.rank}, ${comp.suit}`);
    
    } else {
      changePage(result);
      getScore([compWin,playerWin]);
      
    }

  }

  useEffect(() =>  {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    compDeck.current = deck.slice(0, deck.length / 2);
    playerDeck.current = deck.slice(deck.length / 2, deck.length);
     handleClickNext();
   return () =>{
    console.log('Game will unmount');
    //compWin.current = 0;
    //playerWin.current = 0;
   } 
   
  }, []);


    return (
      <div>
        <h2>Computer ({compWin.current})</h2>
        <p>{compCard}</p>
        <p>{playerCard}</p>
        <h2>{nickName} ({playerWin.current})</h2>
        <button onClick={handleClickNext}>Next</button>
      </div>
    )
}

export default Game