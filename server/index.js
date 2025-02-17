const express=require('express');
const app = express();
const db=require('./db');
const resturentroute=require('./routes/Resturent.js');
const indiviualroute=require('./routes/indiviual.js');
const ngoroute=require('./routes/NGO.js');
const donateroute=require('./routes/Donate.js');
const requestroute=require('./routes/Request.js');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const PORT=process.env.PORT||3000;
app.use('/indiviual',indiviualroute)
app.use('/resturent',resturentroute)
app.use('/ngo',ngoroute)
app.use('/donate',donateroute)
app.use('/request',requestroute)
app.listen(3000,()=>{
    console.log('connected to server 3000');
});