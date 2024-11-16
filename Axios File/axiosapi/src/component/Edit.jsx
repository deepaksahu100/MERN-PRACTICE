import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Edit() {
    let[name,setName] = useState("");
    let[email,setEmail] = useState("");
    let[body,setBody] = useState("");

    let param = useParams();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${param.id}`)
        .then((res)=>{
            console.log(res);
            setName(res.name);
            setEmail(res.email);
            setBody(res.body);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    })

    let data = {name,email,body};

    let edit = (e)=>{
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/comments/${param.id}`)
        .then((res)=>{
            alert("data added successfully");
        })
        .catch((err)=>{
            alert(err);
        })
    }
  return (
    <div>

    </div>
  )
}
