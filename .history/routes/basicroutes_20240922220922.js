const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{'Name of Hospital':'kims','Patient Count':56,location:'Trivandrum'},{'Name of Hospital':'Holy Cross','Patient Count':,location:'Trivandrum'}]











module.exports=router
