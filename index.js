const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

