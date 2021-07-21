const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11426062',
  password: 'GYi48bRwAX',
  database: 'sql11426062',
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
  let sql = 'SELECT * FROM Notes';
  let query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
    });
});


app.post('/post-notes', (req, res) =>{
  let sql = 'INSERT INTO Notes  VALUES (?)';
  let query = db.query(sql, [req.body.Note], (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
    });
});

app.get('/update-notes/:id', (req, res) => {
  const sql = `SELECT * FROM Notes WHERE id=${req.params.id}`
  db.query(sql, req.body, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
  });
});



//gonna add delete notes

//also gonna add update notes