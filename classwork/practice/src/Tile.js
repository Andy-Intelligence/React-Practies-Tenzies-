import './Tile.css'


import React from 'react'

function Tile({ id,value, Held, holdDice }) {
    
// style = {Held ? {backgroundColor:"green"}: {}}

 
    
  return (
    <div onClick={holdDice } className={Held ? "tile isHeld" : "tile"} >
        {value} 
    </div>
  )
}

export default Tile