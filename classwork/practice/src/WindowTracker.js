import React, { useState ,useEffect}  from 'react'

function WindowTracker() {

    const wt = window.innerWidth
const [wind, setWind]  = useState(wt)

    

    
    useEffect(function () {


        function dynWindow() {
        setWind((prev) => {
            return prev = window.innerWidth
        })
            
            
               
        }

        window.addEventListener('resize',dynWindow)
        
        // dynWindow()
    
        return function () {
            window.removeEventListener('resize',dynWindow)
        }

     },[wind])
    


  return (
      <div>
          <h1 >Window Width : { wind}</h1>
    </div>
  )
}

export default WindowTracker