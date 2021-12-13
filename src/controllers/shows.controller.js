const express = require("express");
const router = express.Router();

const Show = require("../models/shows.model");

router.post("/show", async (req, res) => {
    try {
        const show = await Show.create(req.body);
        return res.status(201).send({show});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/shows/:id", async (req, res) => {
    try {
        const shows = await Show.find({movie: req.params.id}).lean().exec();
        return res.status(201).send({shows});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;