const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrls');
const shortUrl = require('./models/shortUrls');
const url='mongodb+srv://Nyandia%40264@cluster0.wzdrk.mongodb.net/urlShortener'
// const url_local='mongodb://localhost/urlShortener'

// mongoose.connect('mongodb://localhost/urlShortener');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB Atlas
mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB Atlas Successfully!'))
  .catch(err => console.error('DB connection error:', err));   
  console.log("MongoDB Atlas uri: ", url);

app.get('/', async(req, res) => {
   const shortUrls = await shortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});
app.post('/shortUrls',async (req, res) => {
   await shortUrl.create({ full: req.body.fullUrl })
    res.redirect('/');
  
});
app.get('/:shortUrl', async(req,res) =>{
   const shortUrl= await ShortUrl.findOne({short:req.params.shortUrl})
    if(shortUrl == null) return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);

})
app.listen(process.env.PORT ||5000);
