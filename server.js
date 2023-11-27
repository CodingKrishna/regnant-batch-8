var http = require('http');
var fs = require('fs');
// const path = require('path')
const url = require('url');
var calcFun = require('./calc')

http.createServer(function (req, res) {
    
    let requestUrl = req.url
    console.log("request received .....>>>", requestUrl);

    if(requestUrl.indexOf("home") >0){
        fs.readFile('home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(requestUrl.indexOf("index") >0){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(requestUrl.indexOf("calc") >0){
        var query = url.parse(req.url,true).query;
        console.log("Query string ==>>", query)
        var queryJosn = JSON.stringify(query);
        var queryJosnObj = JSON.parse(queryJosn);
        console.log("Query string queryJosn ==>>", queryJosnObj)
        console.log("Query string queryJosn ==>>", queryJosnObj.operation)
        var result = calcFun(queryJosnObj.operation, queryJosnObj.x, queryJosnObj.y);
        console.log("result", result);
        res.writeHead(200, {'Content-Type': 'application/json'});
        var response = JSON.stringify({"result": result});
        res.write(response);
        return res.end();
    }else {
        res.write('Welcome to regnant!'); //write a response to the client
        res.end(); //end the response
    }

   

}).listen(8080);
console.log("Server Started.")

// http://localhost:8080/home.html
// http://localhost:8080/index.html
// http://localhost:8080/calc?operation=add&x=10&y=20