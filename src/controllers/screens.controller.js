const express = require("express");
const router = express.Router();

const Screen = require("../models/screens.model");

router.post("/", async (req, res) => {
    try {
        const movie = await Screen.create(req.body);
        return res.status(201).send({movie});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/", async (req, res) => {
    try {
        const screen = await Screen.find().lean().exec();
        return res.status(201).send({screen});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;