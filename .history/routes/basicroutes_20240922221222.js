const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{'Name of Hospital':'kims','Patient Count':56,H location':'Trivandrum'},{'Name of Hospital':'Holy Cross','Patient Count':74,'Hospital location':'Kollam'},{'Name of Hospital':'SP Fort','Patient Count':45,'Hospital Location':'Trivandrum'}]











module.exports=router
