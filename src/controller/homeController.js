import connection from '../configs/connectDB';

let getHome = (req, res) => {
  //logic
  let data = [];

  connection.connect();
  connection.query('SELECT * from `student`', function (error, results, fields) {
    if (error) {
      console.error(error);
      connection.end();
      return res.status(500).send('Internal Server Error');
    }

    if (results) {
      data = results.map(row => {
        console.log(row);
        return row;
      });
    }

    connection.end();
    return res.render('index.ejs', { dataUser: JSON.stringify(data) });
  });
};

module.exports = {
  getHome
};