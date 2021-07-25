const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11427404',
  password: 'RQKTN9twsc',
  database: 'sql11427404',
});

db.connect((err) => {
  if(err) throw err;
  console.log("connected to MYSQL...");
  
});

const app = express();
const port = '3001';
app.use(express.json());
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/get-notes', (req, res) =>{
  let sql = 'SELECT * FROM notes';
  let query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
    });
});


app.post('/post-notes', (req, res) =>{
  let sql = 'INSERT INTO notes (title, note) VALUES (" " , " ")'
  let query = db.query(sql, [req.body], (err, results) => {
      if(err) throw err;
      console.log(req.body);
      console.log(results);
      res.send(results);
    });
});

app.get('/update-notes/:id', (req, res) => {
  const sql = `SELECT * FROM notes WHERE id=(${req.params.id})`
  db.query(sql, req.body, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
  });
});

app.post('/save-notes/', (req, res) => {
  let sql = `UPDATE notes SET title="${req.body.title}", note="${req.body.note}" WHERE id=(${req.body.id})`
  let query = db.query(sql, [req.body], (err, results) => {
    if(err) throw err;
    console.log(req.body);
    console.log(results);
    res.send(results);
  })
});



//gonna add delete notes

//also gonna add update notes