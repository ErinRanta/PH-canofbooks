'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;


const Book = mongoose.model('book', bookSchema);


app.get('/books', (request, response) => {
    console.log(request.query);
    let {} = request.query;

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
