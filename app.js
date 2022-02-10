const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const productsRouter = require('./routers/products');

const app = express();

require('dotenv/config');

const api = process.env.API_URL;

// middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routers
app.use(`${api}/products`, productsRouter);




mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Database Connection is ready ...');
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log(api);
    console.log('server is running http://localhost:3000');
});