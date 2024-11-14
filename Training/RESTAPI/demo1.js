const express = require('express');
const app = express();
const port = '8080';

app.use(express.json());

let users = [
    {
        'name':"Deepak",
        'company':"Young Decade",
    }
];

app.get('/users', (req, res)=>{
    let data = res.json(users);
    console.log(data);
});

app.listen('8080', ()=>{
    console.log("The server is starting");
    
});


