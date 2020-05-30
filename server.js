const express = require('express');
const admin = require('firebase-admin');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

//Defining route
app.use('/api', require('./routes/api/user'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
