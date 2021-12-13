const express = require("express");
const router = express.Router();

const Movie = require("../models/movies.model");

router.post("/movies", async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).send({movie});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find().lean().exec();
        return res.status(201).send({movies});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;