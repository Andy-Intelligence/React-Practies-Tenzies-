import './Box.css'
import React, { useState } from "react"
import array from './array'



function Box({ handleClick,id, filled}) {
    
  
    const styles = {
    backgroundColor: `${filled ? "red": "gray"}`,
    }



  

    return (
        <div  onClick = {()=>handleClick(id)} style = { styles} className='box'>
            
        </div>
    )
}


export default Box;





