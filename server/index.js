 require('dotenv').config()
 const express = require('express');
 const cors = require('cors');
 const cookieParser = require('cookie-parser');
 const mongoose = require('mongoose');
 const router = require('./router/index');
 const errorMiddleware = require('./middlewares/error-middleware')
 const rateLimit = require('express-rate-limit');

 const PORT = process.env.PORT || 5000;
 const app = express();

    const limiter = rateLimit({
        windowMs: 60 * 1000,
        max: 20,
        message: 'Too many requests from this IP, please try again after a minute'
    });

 app.use('/api/refresh', limiter);
 app.use(express.json());
 app.use(express.json());
 app.use(cors({
     credentials: true,
     origin: process.env.CLIENT_URL
 }));
 app.use(cookieParser());
 app.use('/api', router);
 app.use(errorMiddleware);

 const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e){
        console.log(e);
    }
 }

 start();
 