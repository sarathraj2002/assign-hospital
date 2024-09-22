const require=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
app.set('view engine','ejs');