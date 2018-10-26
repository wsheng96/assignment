const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    
  },
  
  link: {
    type: String,
    
  },

  image: {
    type: String,
    
  },

  releaseDate: {
    type: String,
    
  },

  originalPrice: {
    type: String,
    
  },

  ratings: {
    type: String,
    
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);