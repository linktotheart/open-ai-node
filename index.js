const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;


const app = express();
app.use('/openai', require('./routes/routes'))

// enable body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// server started 
app.listen(port, () => console.log("Server started At _ ", port))