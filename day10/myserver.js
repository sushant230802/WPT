const http=require("http");
const fs=require("fs");
const url=require("url");

http.createServer((request,response)=>{
    console.log(request.url)
    if(request.url=="/"){
    fs.readFile("index.htm","utf8",(err,data)=>{
        response.write(data);
        response.end();
        })
    }
    if(request.url=="/registerform"){
        fs.readFile("forms.htm","utf8",(err,data)=>{
            response.write(data);
            response.end();
            })
    }
    if(request.url.startsWith("/verify")){
        q=url.parse(request.url,true).query
        response.write(`<h1>welcome ${q.uname}</h1>`)
        response.end();
    }
}).listen(4444);

console.log("server started at 4444");