require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const productRoutes = require('./routes/productRoutes');

connectDB();
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Server Running on port 5000</h1>');
});
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runnning on PORT ${PORT}`));
