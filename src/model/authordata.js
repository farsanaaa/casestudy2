const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const authorschema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String,
});
var authordata = mongoose.model('authordata',authorschema);

module.exports = authordata;