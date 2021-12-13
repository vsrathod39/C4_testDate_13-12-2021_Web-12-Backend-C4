const express = require("express");
const router = express.Router();

const User = require("../models/users.model");

router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send({user});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(201).send({user});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send({user});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;