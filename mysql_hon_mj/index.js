const express = require('express')
const app = express()
const mysql = require("mysql")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'f03Yl1jF9X',
    database: 'boatrental',
})

db.connect()

// SAILORS

app.get('/sailors', (req, res) => {
    let query = "SELECT * FROM sailors"
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addsailor', (req, res) => {
    let query = `INSERT INTO sailors(sid, sname, rating, age) 
    values (${req.query.sid},"${req.query.sname}","${req.query.rating}","${req.query.age}")`
    db.query(query, (err, results) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("Success")
        }
    })
})

app.get('/deletesailorbyid', (req, res) => {
    let query = `DELETE FROM sailors WHERE sid = ${req.query.deletesailorid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.send(`delete sailor id: ${req.query.deletesailorid} already.`)
        }
    })
})

app.get('/sailorupdate',(req, res) => {
    let query = `UPDATE sailors SET sname='${req.query.sname}', rating='${req.query.rating}', age='${req.query.age}'
                WHERE sid='${req.query.sid}'`;
    db.query(query, (error,results) => {
        if(error) {
            console.log('Something wrong!')
        } else {
            res.send(`update sailor id: ${req.query.sid} already.`);
        }
    });
 })

// BOATS

app.get('/boats', (req, res) => {
    let query = "SELECT * FROM boats"
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addboat', (req, res) => {
    let query = `INSERT INTO boats(bid, bname, color) 
    values (${req.query.bid},"${req.query.bname}","${req.query.color}")`
    db.query(query, (err, results) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("Success")
        }
    })
})

app.get('/deleteboatbyid', (req, res) => {
    let query = `DELETE FROM boats WHERE bid = ${req.query.deleteboatid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.send(`delete boat id: ${req.query.deleteboatid} already.`)
        }
    })
})

app.get('/boatupdate',(req, res) => {
    let query = `UPDATE boats SET bname='${req.query.bname}', color='${req.query.color}'
                WHERE bid='${req.query.bid}'`;
    db.query(query, (error,results) => {
        if(error) {
            console.log('Something wrong!')
        } else {
            res.send(`update boat id: ${req.query.bid} already.`);
        }
    });
 })

// RESERVE

app.get('/reserves', (req, res) => {
    let query = "SELECT * FROM reserves"
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addreserve', (req, res) => {
    let query = `INSERT INTO reserves(sid, bid, day) 
    values (${req.query.sid},"${req.query.bid}","${req.query.day}")`
    db.query(query, (err, results) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("Success")
        }
    })
})

app.get('/deletereservebysid', (req, res) => {
    let query = `DELETE FROM reserves WHERE sid = ${req.query.deletesid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.send(`delete sailor id: ${req.query.deletesid} already.`)
        }
    })
})

app.get('/reserveupdate',(req, res) => {
    let query = `UPDATE reserves SET bid='${req.query.bid}', day='${req.query.day}'
                WHERE sid='${req.query.sid}'`;
    db.query(query, (error,results) => {
        if(error) {
            console.log('Something wrong!')
        } else {
            res.send(`update reserve id: ${req.query.sid} already.`);
        }
    });
 })

app.listen(3001, () => {
    console.log("Start server at port 3001")
})