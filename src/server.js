const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Run Success"
    });
});

app.use(require("./routes/rooms"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});