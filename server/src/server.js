const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const dbo = require("./db/conn");


app.get('/', async (req, res) => {
    await dbo.connectToServer( async function (err) {
        if (err) console.error(err);

        let db_connect = dbo.getDb();
        console.log(db_connect);

        const peers = await db_connect.collection("peers").find().toArray();
        res.json({
            message: "Run Success",
            data: peers
        });
    });
});

// app.get("/", async (req, res) => {
//     dbo.mongoose.connect(dbo.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         res.json({ message: "MongoDB Connection Successfully" })
//     }).catch(err => {
//         res.json({ message: "MongoDB Connection Fail", error: err })
//     });
// });

app.use(require("./routes/rooms"));

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});