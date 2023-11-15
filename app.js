//imports
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const port = 3000;
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/node',{useNewUrlParser: true,useUnifiedTopology: true,});
const Car = mongoose.model('car',{
  brand: String,
  model: String,
  year: Number,
})


app.set('view engine', 'ejs');
app.use (bodyParser.urlencoded({extended:true}));

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
  const{brand,model,year} = req.body;
})

const newcar=new car({
  brand,
  model,
  year,
});

try{
  await newcar.save();
  res.redirect('/car');
} catch (error) {
  res.status(500).send(error.message);

  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
