import React, {useState} from 'react'



export default function () {
    
let [formDetails , setFormDetails] = useState({fn:'',ln:'',eml:'',st:"",ta:'',cb:false,q:'',options:""})

console.log(formDetails)

    let trackChange = (event) => {

        const { name, value,type,checked } = event.target
        
        event.preventDefault()
        setFormDetails((prevVal) => {
            return {
                ...prevVal,
                [name]:type === 'checkbox' ? checked : value
            }
        })
  }

    
    let handleSubmit = (e) => {
        e.preventDefault()
    }
    


    return (
        <form onSubmit = {handleSubmit}>
            <input name='fn' type='text' placeholder='firstName' onChange={trackChange} value={formDetails.fn} />
            <br/>
            <input name='ln' type="text" placeholder="lastName" onChange={trackChange} value={formDetails.ln} />
            <br/>
            <input name='eml' type='email' placeholder='put your email' onChange={trackChange} value={formDetails.eml} />
            <br/>
            <input name='st' type='text' placeholder="state" onChange={trackChange} value={formDetails.st} />
            <br/>
            <textarea name='ta' placeholder='what do you think about this form' onChange={trackChange} value={formDetails.ta} />
            <br/>
            <label htmlFor='question'>Are you excited about questions</label>
            <input type='checkbox' name='cb' id='question' checked={formDetails.cb} onChange={trackChange} />

            <br/>
            <br/>
            <br/>
            <fieldset>
                <legend>Are you currently into programming?</legend>
                <input checked={ formDetails.q === "maybe"} id="q1" type="radio" name = "q" value = "maybe" onChange={trackChange}/>
                <label htmlFor="q1">Maybe</label>
                
                <br />
                
                <input  id="q2" type="radio" name = "q" value = "no" onChange={trackChange}/>
                <label checked={formDetails.q === "no" } htmlFor="q2">No</label>
                
                <br />
                

                <input checked = {formDetails.q === "yes"} id = "q3" type="radio" name = "q" value = "yes" onChange={trackChange}/>
                <label  htmlFor="q3">yea</label>  
            </fieldset>




            <select id="choices" name="options" value={formDetails.options} onChange={trackChange}>
                <option value = "">choose</option>
                <option value = "option1">option1</option>
                <option value = "option2">option2</option>
                <option value = "option3">option3</option>
                <option value = "option4">option4</option>
            </select>

            <br/>
            <br />
            
            <button>Submit</button>
        </form>
        
        
        
    )
}