import 'dotenv/config';import express from 'express';import cors from 'cors';import {connectDB} from './config/db.js';import authRoutes from './routes/auth.js';import leadRoutes from './routes/leads.js';
const app=express();const PORT=process.env.PORT||5000;
app.use(cors({origin:process.env.CLIENT_URL?.split(',')||true}));app.use(express.json());
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'Client Lead CRM'}));app.use('/api/auth',authRoutes);app.use('/api/leads',leadRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Internal server error'});});
connectDB().then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))).catch(err=>{console.error(err);process.exit(1)});
