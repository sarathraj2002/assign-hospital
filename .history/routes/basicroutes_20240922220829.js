const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{'name of hospital':'kims','Patient Count':56,location:'Tr'},{}]











module.exports=router
