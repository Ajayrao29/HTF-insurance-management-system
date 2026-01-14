require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const agentRoutes = require('./src/routes/agent.routes');
app.use('/api/agents', agentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Agents Service Running');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
