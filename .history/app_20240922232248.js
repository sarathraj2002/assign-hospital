const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
app.use()
const basicRoutes=require('./routes/basicroutes');
app.use('/basic',basicRoutes);







app.listen(3000,()=>{
    console.log('server running on PORT 3000');
})
