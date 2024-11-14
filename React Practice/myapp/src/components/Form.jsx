// import React from 'react'
// import { useState } from 'react'

// export default function Form() {
//     let[username, setUsername] = useState("");
//     let [password, setPassword] = useState("");

//     function submit(e){
//         e.preventDefault();
//         if(username==="Deepak" && password==="12345678"){
//             alert('Your form is submitted successfully');
//         }else{
//             alert('incorrect credentials');
//         }
//     }

//   return (
//     <div>
//         <h1>Practice</h1>
//         <form onSubmit={submit} action="">
//             <label htmlFor="">Username:
                
//             </label>
//             <input type="text" value={username} onChange={(e)=>{e.target.value(setUsername)}} />
//             <label htmlFor="">password:
//             </label>
//             <input type="password" value={password} onChange={(e)=>{e.target.value(setPassword)}} />
//         </form>
    
//     </div>
//   )
// }
