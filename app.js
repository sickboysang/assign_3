//imports
const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

const port = 4000;
const routes=require("./servSer/routes/routes.js");
mongoose.connect('mongodb://localhost:27017/node',{useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection"));
db.once("open", () => {
  console.log("database connected");
});

app.use('/', routes);

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout','./layouts/home');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css', express.static(__dirname+ 'public/css/'));
app.use('/js', express.static(__dirname+ 'public/js'));
app.use('/img', express.static(__dirname+ 'public/img'));

app.get('', (req, res) => {
  res.render('home', {text: 'testing from index file'});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
