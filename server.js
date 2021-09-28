const express = require('express');
const app = express();
const PORT = 3000;

//STATIC
app.use(express.static("public"));

//INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs');
});

//NEW
app.get('budgets/new', (req, res) => {
    res.send('new success');
});

//CREATE
app.post('/budgets', (req, res) => {
    res.send('create success');
});

//SHOW
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs');
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});