const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    actor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }],
    languages: [{type: String, required: true}],
    directors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }],
    poster_url: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("movie", movieSchema);