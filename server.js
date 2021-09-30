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
    const newBudget = {
      date: req.body.date,
      name: req.body.name,
      from: req.body.from,
      amount: parseInt(req.body.amount),
    }
    Budget.push(newBudget);
    res.redirect("/budgets")
});

//SHOW
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {allBudgets: Budget[req.params.index]});
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});