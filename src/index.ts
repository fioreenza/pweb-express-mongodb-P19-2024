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

app.use('/book', bookRoutes);

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

//izinkan CORS localhost:3000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});