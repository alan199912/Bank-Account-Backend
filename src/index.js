const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bankRouter = require('./routes/bank');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
  })
);

app.use('/api/v1/bank', bankRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;
