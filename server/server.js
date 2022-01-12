const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'testing'
    });
});

app.listen(3333, () => console.log('API is running on http://localhost:3333/login'));