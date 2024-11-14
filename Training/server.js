var http = require('http');
var fs = require('fs');
const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
const { log } = require('console');

// Understanding of createServer() ------------------------------------------

// const server = http.createServer((req,res)=>{
//     res.write('Hello world')
//     return res.end('It is the end of the response')
// })

// WriteHead() code --------------------------------------

const server2 = http.createServer((req, res)=>{
    fs.readFile('demo1.html', function(err, data){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
});

// code for appendfile() [It add text at the end of the text or create a file if not exist] -----------------------------------------

// fs.appendFile('demo2.txt', 'This is a demo file', function(err){
//     if (err) {
//         console.log('error');
//     }else{
//         console.log('File Created');
//     }
// })

// code for update the existing file -------------------------------

fs.appendFile('demo2.txt', 'This is a updated text', function(err){
    if (err) {
        console.log('error');
    }else{
        console.log('File Updated');
    }
})

// code for writeFile() [it replace the existing text] ------------------------------------

fs.writeFile('demo2.txt','This is the replaced content',function(err){
    if(err){
        console.log('err')
    }else{
        console.log('Content replaced');
    }
})

//Event Listener() ------------------------------------------------------------------

function delt(){
    console.log('delete event, run successfully');
}
eventEmitter.on('deleteEvent', delt);
eventEmitter.emit('deleteEvent', 'event occured');

// code for delete a file using unlink() ---------------------------------------------
fs.appendFile('newdemo2.txt', 'content', function(err){
    if(err) throw err;
    console.log("NewDemo2 Created");
    
} );

fs.unlink('newdemo2.txt', function(err){
    if(err) throw err;
    console.log("File deleted");
});

server2.listen('8080');


//Code for URL module ------------------------------------------------------
const url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);
console.log('hostname is: '+q.host);
console.log('pathname is: '+q.pathname);
console.log(q.search);
console.log(q.query);

//-------------------------------------------------------------------------------------

