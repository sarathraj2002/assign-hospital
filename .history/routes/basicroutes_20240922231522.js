const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const fs = require('fs')
const hs = require('./data.json')

// get





module.exports=router
