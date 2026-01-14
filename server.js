require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();

connectDB();

app.use(express.json());

const agentRoutes = require('./src/routes/agent.routes');
app.use('/api/agents', agentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
