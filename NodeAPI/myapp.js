const express = require('express')
const users = require('./MOCK_DATA.json')
const fs= require('fs')

const app = express();
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("Server started at port 8000");
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/users', (req,res)=>{
    return res.json(users);
})


app.get("/users/:id", (req, res)=>{
   const id = Number(req.params.id);
   const user = users.find((user)=> user.id === id)
   return res.json(user);
})

app.post("/users",(req, res)=>{
    const body = req.body;
    const newUser = {...body, id: users.length+1};
    users.push(newUser);
    fs.appendFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{

        if(err){
            console.log("error occured");
        }
        return res.json(newUser)
        
    })
   
})
