const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{'Name of hospital':'kims','Patient Count':56,location:'Trivandrum'},{}]











module.exports=router
