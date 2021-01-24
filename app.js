// ------------- only node.js
const http = require("http");
const fs = require("fs");
const port = 8081;  
http.createServer(function(request, response){
      
    console.log("from url:", request.url);
    // geting url from /
    const filePath = "templates/" + request.url.substr(1);

    fs.readFile(filePath, function(error, data){
              
        if(error){
                  
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
}).listen(port, function(){
    console.log(`Server started at : http://localhost:`, port, `at time`, Date.now("DD, HH, SS"));
});