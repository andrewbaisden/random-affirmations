const express = require('express');
const cors = require('cors');
const path = require('path');
const adminRoute = require('./routes/admin');

const app = express();
app.use(cors());

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', adminRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));