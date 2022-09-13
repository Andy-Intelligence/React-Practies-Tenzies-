import React, {useState} from 'react'



export default function Messages() {
    

    const [message, setMessage] = useState(['a', 'b'])


    return (
        <div>
            {message.length > 0 ? <h1>you have {message.length} unread message{ message.length > 1 && "s"}</h1>  : <h1>you are all caught up</h1>}
        </div>
    )
}