import React, {useEffect, useState} from 'react'
import './Tenzies.css'
import Tile from './Tile'
import Confetti from 'react-confetti'


function Tenzies() {

    const [gameState, setGameState] = useState(function () { return randomNumbers(12) })
    const [tenzies, setTenzies] = useState(false)


    useEffect(function () {
        
        gameState.forEach((curr) => {

            const diceState = gameState.every((curr) => { return curr.isHeld })
            const diceValue = gameState[0].value
            let diceValState = gameState.every((curr)=>{return curr.value === diceValue})
            if (diceState === true && diceValState === true) {
                setTenzies(true)
               return console.log("you won") 
            }
        })
    },[gameState])



    /** Write a function that creates an array of 12 random numbers between 1 and 6 */
    
    function randomNumbers(arrLen) {
        let availableTiles = 6
        const randomNumbersArr = []
        for (let i = 0; i < arrLen; i++){

            let number = {
                id: new Date().getTime() * Math.random(),
                isHeld: false,
                value:Math.ceil(Math.random() * availableTiles)
            }
             
            randomNumbersArr.push(number)
            
        }
    return randomNumbersArr
    }


    function holdTheDice(id) {
       
       console.log(id)

       setGameState(
           gameState.map((curr) => {        
            return curr.id === id ? {...curr,isHeld:!curr.isHeld} : curr
       })
       )
    }


    

    let Square = gameState.map((curr) => {
        return <Tile id={ curr.id} key={curr.id} value={curr.value} Held={curr.isHeld } holdDice = {() =>holdTheDice(curr.id)} />
   })


    
    function genRandTileVal() {
        if (!tenzies) {
            setGameState(

            gameState.map((curr) => {
                
                return curr.isHeld ? curr : {
                    id: new Date().getTime()*Math.random(),
                    isHeld: false,
                    value:Math.ceil(Math.random() * 6)
                }
                
            })
            // return randomNumbers(12)
        )
        } else {
            setTenzies(false)
            setGameState(function () { return randomNumbers(12) })
        }
        
        
    }



 
  return (
      <main>
          {tenzies && <Confetti/>}
          <h1>Tenzies</h1>
          <h3>Roll and hold the dice values till all the dice have the same value</h3>
          <section className='tiles__container'>
              {Square}
          </section>

         { tenzies ? <button onClick={genRandTileVal}>New Game</button> : <button onClick={genRandTileVal}>Roll</button>} 
    </main>
    
  )
}

export default Tenzies