import pool from '../configs/connectDB';

let getHome = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * from `student`');
    return res.render('index.ejs', {dataUser:rows });

};

let getRouter=async(req,res)=>{
        let id=req.params.userId
        let user=await pool.execute('SELECT * from `student` where `student_id`=?',[id]);
        return res.send(JSON.stringify(user[0]))
};

let getCreateUser=async(req,res)=>{
    let{surname,givennames,birthday,year}=req.body
    await pool.execute(`insert into student(surname,given_names,date_of_birth,year_encrolled) values (?, ?, ?, ?)`,
    [surname,givennames,birthday,year]);
    return res.redirect('/')

}
module.exports = {
  getHome,getRouter,getCreateUser
}