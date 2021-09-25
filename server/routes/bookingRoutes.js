const express = require('express');
const {auth} = require('../middleware/auth');
const formidable = require('express-formidable');
const router = express.Router();

const {createBooking, getBookings} = require('../controller/bookingController');
router.post('/newbooking', auth, createBooking);
router.get('/getallbookings/:addedby', auth, getBookings);

module.exports = router;