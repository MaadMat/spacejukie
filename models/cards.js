const mongoose = require("mongoose");

const Cards = new mongoose.Schema({

    name: {
        type: String,
        unique: true
    }
    , Words: {
        type: Array
    }
     
},{collection:"Cards"})

const SchemaModel = mongoose.model("Cards", Cards)
module.exports = SchemaModel
