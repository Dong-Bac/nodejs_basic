import express from "express";
import {getHome,getRouter, getCreateUser,postDeleteUser, getEditUser, postUpdateUser} from '../controller/homeController'

let router=express.Router();

const initWebRouter=(app)=>{
    router.get('/', getHome)
      
      router.get('/about', (req, res) => {
         res.send('Hello World!')
      })
      app.get('/detail/user/:userId', getRouter)
      app.post('/create-new-user', getCreateUser)
      app.post('/delete/user',postDeleteUser)
      app.get('/edit/user/:userId',getEditUser)
      app.post('/Update-user',postUpdateUser)
      return app.use('/',router)
}

module.exports=initWebRouter

