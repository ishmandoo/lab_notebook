var mongoose = require('mongoose');

var Product = mongoose.model('Note', { name: String , content: String});

module.exports = Product;
