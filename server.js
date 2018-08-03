const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Monster = require('./models/duelMonsters');

require('./db/db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Set up middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
  Monster.find({}, (err, theseMonsters) => {
    res.render('index.ejs', {
      monsters: theseMonsters
    });
  });
});

app.get('/new', (req, res) => {
  Monster.find({}, (err, newMonster) => {
    res.render('new.ejs', {
      // the variable on the left of the colon is
      // passed into the template/function
      monsters: newMonster
    });
  });
  //console.log(req.body, " this is req.body")
});

// display the edit page for when editing a username
app.get('/:id/edit', (req, res) => {
  Monster.findById(req.params.id, (err, foundMonster) => {
      res.render('edit.ejs', {
        monsters: foundMonster
      });
  });
  console.log(req.body, " this is req.body")
});

app.get('/:id', (req, res) => {
  Monster.findById(req.params.id, (err, foundMonster) => {
    res.render('show.ejs', {
      monsters: foundMonster
    });
  });
});

// post a new user
app.post('/', (req, res) => {
  Monster.create(req.body, (err, newMonster) => {
    console.log(newMonster, ' New Monster Created...');
    res.redirect('/');
  });
  console.log(req.body, " this is req.body")
});

// update a new user
app.put('/:id', (req, res) => {
  Monster.findByIdAndUpdate(req.params.id, req.body, (err, updatedMonster) => {
    res.redirect("/");
  })
  console.log(req.body, " this is req.body")
})

// Delete a user
app.delete('/:id/delete', (req, res) => {

  Monster.findByIdAndRemove(req.params.id, (err, deletedMonster) => {
    console.log(deletedMonster, ' A dual monster has been deleted...');
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is on, active, and listening');
})



// 1 person makes the repo
//   invite the others as collaborators
// git checkout -b "your-name-feature"
// (work hard, make changes)
// git add .
// git commit -m "descriptive"
// git checkout master git pull
// git checkout -b "your-name-feature"
// git push
