import React,{useState} from "react"




export default function Joke({setup, punchline}) {
    
  const [isShown, setIsShown] = useState(false)
  
  function tfJoke() {
    
  
      setIsShown((prevValue) => {
          
          return !prevValue
        //   if (prevValue === false) {
        //       return prevValue = true
        //   } else {
        //       return prevValue = false
        //   }
         
      })
    


  }
  


    return (
        <div>
            {setup && <h2>{ setup}</h2>  }
            
            { isShown ? <p>{punchline}</p>: <p></p> } 
            <button onClick={tfJoke}>{isShown ? "Hide": "Show"} Punchline</button>
        </div>
    )
}