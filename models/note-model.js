const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const note_schema = new Schema({
    text: {
        type: String,
        required: true
    },
    lista: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    } 
});
const note_model = new mongoose.model('note', note_schema);

module.exports = note_model;