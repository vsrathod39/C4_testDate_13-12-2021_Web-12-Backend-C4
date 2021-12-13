const express = require("express");
const router = express.Router();

const Seat = require("../models/seats.model");

router.post("/seat", async (req, res) => {
    try {
        const seat = await Seat.create(req.body);
        return res.status(201).send({seat});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/seat/:id", async (req, res) => {
    try {
        const seats = await Seat.find({show: {$eq: req.params.id}}).populate("show", "total_seats").lean().exec();
        return res.status(201).send({total_seat: seats[0].show.total_seats});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;