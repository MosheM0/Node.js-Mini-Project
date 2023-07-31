const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/flats',require('./routes/flats.js'));

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
