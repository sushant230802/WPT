var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>kese ho bro</h1>");
    response.end("hello bro");
}).listen(5555,function(){
    console.log("server running at 5555")
})

