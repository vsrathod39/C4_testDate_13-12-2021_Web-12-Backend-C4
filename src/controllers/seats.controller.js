const express = require("express");
const router = express.Router();

const Seat = require("../models/seats.model");

router.post("/seat", async (req, res) => {
    try {
        const seats = await Seat.find({show: {$eq: req.body.show_id}}).populate("show", "total_seats").lean().exec();
        const total_seat = Number(seats[0].show.total_seats);
        let booking_status = "";
        if(total_seat >= Number(req.body.seat)){
            booking_status = "Booked";
        }else{
            booking_status = "No seats available"
        }
        return res.status(201).send({booking_status});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/seat", async (req, res) => {
    try {
        const seats = await Seat.find({show: {$eq: req.body.show_id}}).populate("show", "total_seats").lean().exec();
        return res.status(201).send({total_seat: seats[0].show.total_seats});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;