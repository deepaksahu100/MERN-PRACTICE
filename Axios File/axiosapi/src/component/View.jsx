import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function View() {

    let[data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);  
        })
    })
  return (
    <div>
        <Link to='/add'><p>Click Here to add data in the jsonplaceholder api</p></Link>
        <h2>The Details are :</h2>
        <table>
            <thead>
                <tr>
                    <th>ID: </th>
                    <th>Name: </th>
                    <th>Email: </th>
                    <th>Comments: </th>
                </tr>
                
            </thead>
            <tbody>
                {data.map((x)=>{
                    return( 
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.body}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
  )
}
