import express from 'express';
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import { authenticate } from 'middleware/auth';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Koneksi ke Database
connectDB();

// Route ke API Auth
app.use('/auth', authRoutes);

// Route Health Check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is healthy',
    data: { date: new Date() },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
