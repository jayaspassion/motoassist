const fs = require('fs');
const Bookings = require('../models/Bookings')

const createBooking = async (req, res) => {
    try {
        // console.log("At backend!!!", req.body);
        const { addedBy, mobileNumber, bikeManufacturer, bikeNumber, serviceDate, zipCode, fullAddress } = req.body;
        const booking = new Bookings({
            addedBy, mobileNumber, bikeManufacturer, bikeNumber, serviceDate, zipCode, fullAddress
        });
        console.log(booking);
        const savedBooking = await booking.save();
        console.log(savedBooking);
        res.json(savedBooking._id);
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const getBookings = async (req,res) => {
    try {
        const userBookings = await Bookings.find({ addedBy: req.params.addedby });
        console.log(userBookings);
        res.json(userBookings);
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

module.exports = {createBooking, getBookings};