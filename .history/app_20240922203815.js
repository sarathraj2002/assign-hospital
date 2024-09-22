const require=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

const basicRoutes=require('./routes/basicroutes');
app.use('/basic',basicRoutes);







app.listen(3000,()=>{
    console.log('server is listening on PORT 3000')
})
