import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import apiRoutes from '../routes/apiRoutes.js'; // adjust the path as needed

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount API routes under /api
app.use('/api', apiRoutes);

// Remove app.listen() for serverless functions
// Instead, export the serverless handler
export default serverless(app);
