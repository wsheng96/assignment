const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db =
  'mongodb://weisheng:1234qwer@ds033487.mlab.com:33487/assignment_304cemwebapi';
const route = require('./routes/route');
const axios =require('axios');
const cors = require('cors');

const app = express();
const router = express.Router();
const Data = require('./data');
const Comp = require('./schema');

//body parser
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('./routes/route', route);

const port = process.env.PORT || 5000;

const ItemData = require('./models/Item');

app.get('/getgame', (req, res) => {
  const URL = 'http://api.crackwatch.com/api/games';

  axios
    .get(URL)
    .then(function(response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Connect to mongoose
 mongoose
  .connect(
   db,
       { userNewUrlParser: true }
   )
  .then(() => {
     console.log('Connected to mongodb...');
   })
   .catch(error => {
     console.log('MongoDB connected error' + error);
   });

   app.use(cors());
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true}));

   app.post('/addfavourite', (req, res) => {
     const reqItem = JSON.parse(req.body.game);

     console.log('Add Favourite Movie - ', req.body);
     const data = new ItemData({
       title: reqItem.title,
       link: reqItem.link,
       image: reqItem.image,
       releaseDate: reqItem.releaseDate,
       originalPrice: reqItem.originalPrice,
       ratings: reqItem.ratings
     });

     data
     .save()
     .then(response => {
       console.log('Mongoose save OKAY: ', response);
     })
     .catch(error => {
      console.log('Mongoose save ERROR: ', error);
     });
   });

   app.post('/deletefavourite', (req, res) => {
    const reqItem = JSON.parse(req.body.game);

    console.log('Delete Favourite Movie - ', reqItem.title);
    const data = new ItemData({
      title: reqItem.title,
      link: reqItem.link,
      image: reqItem.image,
      releaseDate: reqItem.releaseDate,
      originalPrice: reqItem.originalPrice,
      ratings: reqItem.ratings
    });
    ItemData.findByIdAndRemove(reqItem._id, function(err, data) {
      if (!err) {
        console.log('Deleted');
        res.send('Delete Favourite Movie Successfully');
      }
      });
    });

    app.get('/getfavourites', (req, res) => {
      ItemData.find({}, function(err, data) {
        if(err) return res.send('Something went wrong');
        console.log(data);
        res.json(data);
      });
    });

    app.listen(port, () => {
      console.log('Connecting...');
    });

