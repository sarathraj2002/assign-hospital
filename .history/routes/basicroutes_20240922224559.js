const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

var arr_obj=[{'Name of Hospital':'kims','Patient Count':56,'Hospital Location':'Trivandrum'},{'Name of Hospital':'Holy Cross','Patient Count':74,'Hospital location':'Kollam'},{'Name of Hospital':'SP Fort','Patient Count':45,'Hospital Location':'kannur'}]

// get
router.get=('/get',(req,res)=>{
    res.render('get',{
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
    res
})











module.exports=router
