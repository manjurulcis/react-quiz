

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const connection = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "" ,
    database: 'quizdb' 
    }); 

    connection.connect(function(err) {  
        if (err) throw err;  
console.log("Connected!");  

         
});  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:19007");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function (req, res) {
    connection.query('select * from answers', function (err, result) {  
        if (err) throw err;  
        console.log("Table selected");  
        var string=JSON.stringify(result);
        res.send(result);
        }); 
    
 })

 app.post('/storedata', function (req, res) {
    // connection.query('select * from answers', function (err, result) {  
    //     if (err) throw err;  
    //     console.log("Table selected");  
    //     var string=JSON.stringify(result);
    //     res.send(result);
    //     }); 
    var user_ans = req.body.user_answer;
    var option =  req.body.selected_option;
    connection.query('INSERT INTO `answers` (`user_answer`, `selected_option`) VALUES ("'+user_ans+'", "'+option+'")',function (err, result) {  
            if (err) throw err;  
            console.log("Data inserted");  
            var string=JSON.stringify(result);
            res.send(result);
            });


    console.log(req.body.user_answer);
   
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("App listening at http://:%s",port)
 })
 