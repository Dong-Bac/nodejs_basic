import pool from '../configs/connectDB';

let getHome = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * from `student`');
    return res.render('index.ejs', {dataUser:rows });

};

let getRouter=async(req,res)=>{
        let id=req.params.userId
        let user=await pool.execute('SELECT * from `student` where `student_id`=?',[id]);
        return res.send(JSON.stringify(user[0]))
}

module.exports = {
  getHome,getRouter
};