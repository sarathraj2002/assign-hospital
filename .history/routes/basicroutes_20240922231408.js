const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const fs = require('fs')
const hs = require('./data.json')

// get
router.get=('/get',(req,res)=>{
    fs.readFile('hospita',{
        title:'patient',
        arr_obj
    })
})

router.post('/add',(req,res)=>{
    const data=req.body;
    console.log(data);
    arr_obj.push(data);
    res.send('post successful')
})

router.put('/edit',(req,res)=>{
    const data=req.body;
    arr_obj.splice(1,1,data);
    res.send(arr_obj);
})

router.delete('/remove',(req,res)=>{
    arr_obj.pop(data);
    res.send(arr_obj);
})











module.exports=router
