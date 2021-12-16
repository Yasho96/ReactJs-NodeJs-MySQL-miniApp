const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'userdetails'
});

//Insert login details to users table
app.post('/create', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    

    db.query("INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    }
    );
})
//Get all users - for admin to see all users
app.get('/user', (req, res) => {
    db.query("SELECT * FROM users ORDER BY username", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
//Insert user information
app.post('/info', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneno1 = req.body.phoneno;
    const phoneno2 = req.body.phoneno;
    const hobby = req.body.hobby;

    db.query("INSERT INTO userinfo (name, email, phoneNo1, phoneNo2, hobbies) VALUES (?,?,?,?,?)",
    [name, email, phoneno1, phoneno2, hobby],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted to userinfo");
        }
    }
    );
})


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

/*
//Update users
app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE users SET username = ?,password = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Delete users
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}); */

