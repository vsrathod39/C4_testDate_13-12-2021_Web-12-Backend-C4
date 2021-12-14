const mongoose = require("mongoose");

module.exports = () => {
    // mongodb+srv://vsrathod39:Vsr0199@cluster0.1ften.mongodb.net/movie_system
    return mongoose.connect("mongodb+srv://vsrathod39:Vsr0199@cluster0.1ften.mongodb.net/movie_system");
};