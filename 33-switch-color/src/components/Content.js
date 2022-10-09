
import React from "react"
const Content =({color,size , changeColor}) => {
    const handleClick = () => {
if(size === 'large') {
    changeColor (''); 
    } else {
        changeColor(color);
    }
}
    
    return(
  
   <div onClick={handleClick} className={`${size} ${color}`}> </div> 
    )
}


export default Content