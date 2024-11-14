// import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';

import Uc2 from './components/Uc2';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


const MessageContext = createContext();

function App() {

  let[username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [submit, setSubmit] = useState(false);
  let[count, setCount] = useState(0);
  let[message, setMessage] = useState("This is a message");




 

  //  code for useeffect count method ----------------------------------------------------
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1)
    }, 1000)
  },[])

  function increase(){
    setCount((count)=>count+1)
  }
  console.log(count);
// ------------------------------------------------------------------------------------

// code for form validation using usestate ---------------------------------
  useEffect(()=>{
      if(submit){
        if(username==="Deepak" && password==="12345678"){
          alert('Your form is submitted successfully');
          console.log(username);
      }else{
          alert('incorrect credentials');
          console.log(username);
      }
      setSubmit(false);
      }
      
  },[submit,username, password])

  function handleSubmit(e){
    e.preventDefault();
    setSubmit(true);
  }
  //---------------------------------------------------------------

  return (
    <div>
        <h1>Practice</h1>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Username:
                
            </label>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            <label htmlFor="">password:
            </label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button>submit</button>
        </form>
        <h1>{count}</h1>
        <button onClick={increase}>count++</button>

         {/* use context ----------------------------------------- */}
         
  <MessageContext.Provider value={message}>
    <h1>This is a useContext</h1>
    <Uc2/>
  </MessageContext.Provider>
  {/* //-------------------------------------------------- */}


    </div>
  );
}

export default App;
