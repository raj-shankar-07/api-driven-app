require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const searchRoute = require('./routes/search');


const app = express();
app.use(cors());
app.use(express.json());


// routes
app.use('/api/search', searchRoute);

app.get('/', (req, res) => {
  res.send('API is running on port ' + (process.env.PORT || 5000));
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.ATLASDB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});