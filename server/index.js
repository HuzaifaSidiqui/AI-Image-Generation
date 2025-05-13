import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from './routes/Posts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.use('/api/posts', PostRouter)

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Welcome to the server!'
    })
})

const StartServer = async ()=>{
    try {
        app.listen(8080, ()=>{
            console.log('Server is running on port 8080')
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

StartServer();

const ConnectDB = ()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((error)=>{
        console.error('Error connecting to MongoDB', error);        
    })
}

ConnectDB();