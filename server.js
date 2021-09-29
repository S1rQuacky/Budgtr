const express = require('express');
const app = express();
const PORT = 3000;
const Budget = require("./models/budget")

//Middleware
app.use(express.urlencoded({extended: false}))

//STATIC
app.use(express.static("public"));

//INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudgets: Budget});
});

//NEW
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
    
});

//CREATE
app.post('/budgets', (req, res) => {
    console.log(req.body);
});

//SHOW
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {allBudgets: Budget[req.params.index]});
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});