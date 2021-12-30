

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const connection = mysql.createConnection({  
<<<<<<< HEAD:Backend/request.js
    host: "db",  
    user: "quiz",  
    password: "quiz" ,
    database: 'quizdb'
=======
    host: "localhost",  
    user: "root",  
    password: "" ,
    database: 'quizdb' 
>>>>>>> refactor:server/request.js
    }); 

connection.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!");         
});  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:19006");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    connection.query('select user_answer, selected_option, time from answers ORDER BY time desc', function (err, result) {  
        if (err) throw err;  
        console.log("Table selected");  
        //var string=JSON.stringify(result);
        res.send(result);
        }); 
    
 })

<<<<<<< HEAD:Backend/request.js
app.post('/storedata', function (req, res) {
=======
 app.post('/storedata', function (req, res) {
    if(!req.body.user_answer || !req.body.selected_option){
        console.log('No data found');
    }  
    
>>>>>>> refactor:server/request.js
    var user_ans = req.body.user_answer;
    var option =  req.body.selected_option;
    var time =  req.body.time;
    connection.query('INSERT INTO `answers` (`user_answer`, `selected_option`, `time`) VALUES ("'+user_ans+'", "'+option+'", "'+time+'")',
    function (err, result) {  
            if (err) throw err;  
            console.log("Data inserted");  
            res.send(result);
            });
   
 })
 
 var server = app.listen(3001, function () {
    var port = server.address().port
    
    console.log("App listening at http://:%s",port)
 })
 