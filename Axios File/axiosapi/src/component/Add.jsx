import axios from 'axios';
import React, { useState } from 'react'

export default function Add() {

    let[name,setName] = useState("");
    let[email,setEmail] = useState("");
    let[body,setBody] = useState("");

    let data = {name,email,body};

    let addComment = (e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/comments',data)
        .then((res)=>{
            console.log(res.data);
            
            console.log("Data added successfully");
            alert("Data added successfully");
            
        })
        .catch((err)=>{
            console.log(err);
            
            alert("Invalid input");
        })
    }

  return (
    <div>
        <form action="" onSubmit={addComment}>
            <label htmlFor="">
                Name : 
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </label>
            <label htmlFor="">
                Email : 
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </label>
            <label htmlFor="">
                Name : 
                <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} />
            </label>
            <button>Add</button>
        </form>
    </div>
  )
}
