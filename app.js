//imports
const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

const port = 4000;
const routes=require("./servSer/routes/routes.js");
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/node',{useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection"));
db.once("open", () => {
  console.log("database connected");

});
const Car = mongoose.model('car',{
  Brand: String,
  Model: String,
  year: Number,
})
app.use('/', routes);
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout','./layouts/home');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css', express.static(__dirname+ 'public/css/'));
app.use('/js', express.static(__dirname+ 'public/js'));
app.use('/img', express.static(__dirname+ 'public/img'));
app.use (bodyParser,bodyParser.urlencoded({extended:true}));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/car', async (req,res) =>{
  try{
    const car = await car.find();
    res.render('car', {car});
  } catch(error){
    res.status(500).send(error.message);

}

app.post('/addcar',async(req,res)=> {
  const{Brand,model,year} = req.body;
})

const newcar=new car({
  Brand,
  model,
  year,
});

try{
  await newcar.save();
  res.redirect('/');
} catch (error) {
  res.status(500).send(error.message);

  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
