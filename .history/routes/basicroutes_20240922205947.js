const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{hospitalname:'kims',patient id:101,location:'tvm'}]
