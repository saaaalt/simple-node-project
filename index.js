const http = require('node:http')
const fs = require('fs')
const url = require('url')

const page404 = fs.readFileSync("404.html", "utf-8", (err, data) =>{
    if (err) throw err;
    return data;
})

http.createServer(function (req, res){
    
}).listen(8080)

