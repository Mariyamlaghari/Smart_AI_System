const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Yahan apna MongoDB connection string daalein.
// Isse .env file me rakhna behtar hai.
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Mariyam:<db_password>@smart-ai.hgrm1kz.mongodb.net/?appName=Smart-AI";

mongoose.connect(DATABASE_URL)
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello! Your Smart AI System is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
