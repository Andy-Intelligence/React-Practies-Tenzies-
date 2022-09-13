import React, {useEffect, useState} from 'react'
import character from './character'

const url = "https//swapi.dev/api/people/1"




function Count() {

// console.log(character)

const [count , setCount] = useState(0)
const [arr, setArr] = useState(character[0])


//     useEffect(
//         function () {
//             fetch(`https//swapi.dev/api/people/${count}`)
//         .then((response) => { response.json() })
//         .then((data) => {
//            return setArr((prev) => {
//                 return {...prev}
//             })
//         })
//         },[count]
        
// )
    
    
    
    useEffect(function () {
       
       

    }, [])
    

    
        
    



    let handleChange = () => {
        setArr((prev) => {
            
            return character[count + 1]
        })
        
        setCount((prev) => {
            return prev + 1
        })
    }




  return (
      <div>
          <p >The count is { count}</p>
          <button onClick={handleChange}>Get Next Character</button>
          <div>{ JSON.stringify(arr,null, 10)}</div>
      </div>
  )
}

export default Count