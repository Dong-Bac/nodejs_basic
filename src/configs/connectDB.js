import mysql from 'mysql2';

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'person'
  });
   
//  connection.connect();
//   connection.query('SELECT * from `student`', function (error, results, fields) {
//     // if (error) throw error;
//     // console.log('The solution is: ', results[0].solution);
//     console.log('>>> check mysql')
//     console.log(results);
//   });
   
//   connection.end();


export default connection;