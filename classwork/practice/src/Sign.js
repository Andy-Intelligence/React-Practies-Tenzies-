import React,{useState} from 'react'


export default function Sign() {
    
let [formInfo, setFormInfo ] = useState({email:'',password:"",confirmPassword:"",checkbox:false})

    
    let trackChange = (event) => {

        const {name, value, checked,type} = event.target


        return setFormInfo(function (curr) {
           return {...curr,[name]:type==="checkbox" ? checked : value}
       })
    }
    
    
    
    

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(formInfo)


        if (formInfo.password === formInfo.confirmPassword) {
            console.log('password correct login successful')
            if ( formInfo.checkbox) {
            console.log('Thanks for subscribing to our news letter')
        }
        }
        
        else {
            console.log('Incorrect password please register')
        }



    }


    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "email">Email :</label>
            <input id="email" type="email" placeholder="email-address" name = "email" value= {formInfo.email} onChange = {trackChange} />
            
            <br/>
            <br />
            
            <label htmlFor="password">Password :</label>
            <input id="password" type="password" name="password" value={formInfo.password} onChange={trackChange} />
            
            <br />

            <label htmlFor='confirmPassword'>Confirm Password :</label>
            <input id="confirmPassword" type="password" name="confirmPassword" value={ formInfo.confirmPassword} onChange = {trackChange} />
            
            <br />

            <label htmlFor="newsletter">I want to join the newletter</label>
            <input id="newsletter" type="checkbox" name="checkbox" value={formInfo.checkbox } onChange = {trackChange} />
            
            <br />

            <button>Sign Up </button>
        </form>
    )
}