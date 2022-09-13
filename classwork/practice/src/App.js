import React, {useState} from "react"
import './App.css';
import Box from './Box';
import array from './array'
import jokes from './jokes'
import Joke from './Joke'
import Message from './Messages'
import Form from './Form'
import Sign from './Sign'
import Count from './Count'
import WindowTracker from "./WindowTracker";
import Retain from './Retain'
import Tenzies from './Tenzies'







function App() {
  
const [ourArray, setOurArray] = useState(array)

  
  const [joke, setJoke] = useState(jokes)


// const [on, setOn] = useState(array.on)


  




 function toggle(id) {
    //  setOn(prevOn => !prevOn)   
   
     setOurArray(
    (prevSquare) => {
//       const newSquares = []
//       for (let i = 0; i < prevSquare.length; i++){

//         const currentSquare = prevSquare[i]
//         if (currentSquare.id === id) {
//           const updatedSquare = {
//             ...currentSquare,
//             on:!currentSquare.on
//           }
//           newSquares.push(updatedSquare)
//         }

//         else {
//           newSquares.push(currentSquare)
//         }
//       }

// console.log(newSquares)
//       return newSquares
         
         
         
        return  prevSquare.map((curr) => {
           
           return curr.id === id ? {...curr, on: !curr.on} : curr
         })
    })
   
   
   
 }
  
  
  

  

  
  const arrItems = ourArray.map((curr) => {
    return (<Box handleClick={toggle} key={curr.id} id={ curr.id} filled = {curr.on} />)
  })
  



  const arrJokes = jokes.map((curr) => {
    return (<Joke setup={curr.setup} punchline={curr.punchline}   id={curr.id } key={curr.id }  />)
  })

  const [state, setState] = useState(false)
  

      let handleDisplay = () => {
        setState((prev) => {
        return !prev
        })
        
        console.log(state)
}

  


  return (
    <div className = 'app'>
      {/* {arrItems} */}
      {/* {arrJokes} */}
      {/* <Message/> */}
      {/* <Form /> */}
      {/* <Sign /> */}
      {/* <Count /> */}
      {/* { state && <WindowTracker />}
    <button onClick = {handleDisplay}>Toggle Window tracker</button> */}
      {/* <Retain/> */}
      <Tenzies />
    </div>

  )
}




export default App;









