const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inf115_ca1",
});

// endpoint
app.get("/movies", (req, res) => {
    
    console.log("Got request")

    db.query(
        "SELECT * FROM film",
        [],
        (err, result) => {
            if (err) throw err;
            else {
                res.send(result);
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Server is up and running")
});
