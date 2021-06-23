const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (request, responce) => {
    try {
        responce.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
});

const PORT = 7777;
app.listen(PORT, (request, responce) =>  {
    console.log(`API started at PORT: ${PORT}`)
})

require('./modules/tasks.js')(app);