const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(express.json());
app.use(cors());

//middleware


//route test
app.get('/', (req, res) => {
    res.send('Backend test');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
