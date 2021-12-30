var connection =require('../Config/DatabaseConnection');

const selectTable =(res)=>{
    connection.query("select user_answer, selected_option, time from answers ORDER BY time desc", function (err, result) {
        if (err) throw err;
        console.log("Table selected");
        res.send(result);
      }
    );
};

const insertData = (req,res)=> {
    if (!req.body.user_answer || !req.body.selected_option) {
        console.log("No data found");
        return false;
    }
    var user_ans = req.body.user_answer;
    var option = req.body.selected_option;
    var time = req.body.time;
    var sql = 'INSERT INTO `answers` (`user_answer`, `selected_option`, `time`) VALUES ("' + user_ans +'", "' + option + '", "' + time +'")';
    connection.query( sql, function (err, result) {
        if (err) throw err;
        console.log("Data inserted");
        res.send(result);
    });
    
}

module.exports ={ 
    selectTable, insertData
}