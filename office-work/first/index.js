const express = require('express')
const mysql = require('mysql')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database')
// const myapi = require('./myapi')


app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'hbs')


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));



app.get('/home',function (req,res) {
    res.render('home')
    
})



app.post('/', (req, res) => {
    const { name,mail,phone } = req.body;
    const query = 'INSERT INTO crud( `Name`, `Email`, `phoneno`) VALUES (?, ?, ?)';
    if (!name || !mail || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    db.query(query, [ name,mail,phone ], (error, results) => {
        if (error) {
            console.error('db query error:', error);
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ message: 'data created', id: results.insertId });
    });
});


app.get('/data', (req, res) => {
    console.log('enter');
    db.query('SELECT * FROM crud', (error, results) => {
        if (error) {
            console.error('db query error:', error);
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});



app.delete('/data/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM `crud` WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('db query error:', error);
            return res.status(500).json({ error: error.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json({ message: 'data delete' });
    });
});

app.put('/data/:id', (req, res) => {
    const { id } = req.params;
    const { name, mail, phone } = req.body;

    // Validate inputs
    if (!name || !mail || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Log the incoming data for debugging
    console.log(`Update request: ID=${id}, Name=${name}, Mail=${mail}, Phone=${phone}`);

    db.query('UPDATE crud SET Name = ?, Email = ?, Phoneno = ? WHERE id = ?', [name, mail, phone, id], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: error.message });
        }

        if (results.affectedRows === 0) {
            console.log(`No record found with ID: ${id}`);
            return res.status(404).json({ error: `No record found with ID: ${id}` });
        }

        res.json({ message: 'Data updated successfully' });
    });
});






app.listen(3000,function (err) {
    if (err) {
        throw err
        
    }
    console.log('port run on 3000');
})
