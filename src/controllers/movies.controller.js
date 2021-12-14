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
        let movies = await Movie.find().populate("actor", "name").lean().exec();
        
        let finalColle = [];
        for(let i = 0; i < movies.length; i++){
            for(let j = 0; j < movies[i].actor.length; j++){
                if(movies[i].actor[j].name === req.body.name){
                    finalColle.push(movies[i]);
                }
            }
        }
        return res.status(201).send({finalColle});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;