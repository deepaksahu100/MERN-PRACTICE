import React, { useContext } from 'react'
import MessageContext from '../App'



export default function Uc2() {

    const message = useContext(MessageContext);
  return (
    <div>
        <h1>useContext component 2</h1>
        <p>{`the message is ${message}`}</p>

     
    </div>
  )
}
