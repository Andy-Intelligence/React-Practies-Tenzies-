import React, { useEffect,useState } from 'react'








function Retain() {
  const [formDetails, setformDetails] = useState({ text: "" })
  const [nameList, setNameList] = useState(function () { return JSON.parse(localStorage.getItem('input')) || []})
  


  let handleInput = (event) => {
    const { name, value } = event.target


    setformDetails((prev) => {
      return {...prev,[name]:value}
    })


    console.log(formDetails)
    
    // localStorage.setItem("input",formDetails)
  
  }



  function submit(e) {
    e.preventDefault()
    

    setNameList((prev) => {
      return [...prev,formDetails.text]
    })
    // nameList.push(formDetails.text)



   
    
    

    // return nameList
  }



 


  useEffect(function () {
    
localStorage.setItem("input", JSON.stringify(nameList) || [])
   

  
    
  },[nameList])
  
 
  // let names = JSON.parse(localStorage.getItem('input'))
  //   console.log(names)
     
 
    let list = nameList.map((curr) => {
      return <h1>{ curr}</h1>
  })

  

  return (
    <div>

      {list}


      <label htmlFor='name'>What's your name</label>
      <br/>
      <br/>
      <input type='text' name="text" id="name" placeholder="type in name" value={formDetails.text} onChange = {handleInput} />
      
      <button onClick={ submit}>Add</button>
    </div>
  )
}

export default Retain