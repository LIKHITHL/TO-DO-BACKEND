const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "module-3"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/addTask', (req, res) => {
    const sql = "INSERT INTO tasks (`Task`) VALUES(?)";
    const values = [
        req.body.added
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/editTask/:id', (req, res) => {
    const sql = "update tasks set `Task` = ? where ID = ?";
    const values = [
        req.body.added
    ]
    const id = req.params.id;
    console.log(req.params.id);
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/Tasks/:id', (req, res) => {
    const sql = "DELETE FROM tasks WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8081, () => {
    console.log("Server Started.........!");
})