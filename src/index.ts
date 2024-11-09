import express from 'express';
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import authenticate from './middleware/auth';
import bookRoutes from './routes/book.route';
import mechanismRoutes from './routes/mechanism.route';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Koneksi ke Database
connectDB();

// Route ke API Auth
app.use('/auth', authRoutes);

app.use('/book', authenticate, bookRoutes);

app.use('/mechanism', authenticate, mechanismRoutes);

// Route Health Check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello World!',
    date: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
