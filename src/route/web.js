import express from "express";
import {getHome} from '../controller/homeController'

let router=express.Router();

const initWebRouter=(app)=>{
    router.get('/', getHome)
      
      router.get('/about', (req, res) => {
         res.send('Hello World!')
      })

      return app.use('/',router)
}

module.exports=initWebRouter