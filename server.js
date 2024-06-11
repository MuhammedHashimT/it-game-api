const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const triviaRoutes = require('./routes/triviaRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trivia', triviaRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));