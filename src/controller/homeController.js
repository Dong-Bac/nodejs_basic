import connection from '../configs/connectDB';

let getHome = (req, res) => {
  //logic
  let data = [];

  connection.connect();
  connection.query('SELECT * from `student`', function (error, results, fields) {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }

    if (results) {
      data = results.map(row => {
        return row;
      });
    }

    return res.render('index.ejs', { dataUser:data });
  });
};

module.exports = {
  getHome
};