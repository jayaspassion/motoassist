const mongoose = require('mongoose');

//This schema represents the services booked by user

const BookingsSchema = new mongoose.Schema({
    addedBy : {
        type : String,
        required : true 
    },
    mobileNumber :{
        type : Number,
        required : true 
    },
    bikeManufacturer : {
        type : String,
        required : true 
    },
    bikeNumber : {
        type : String,
        required : true 
    },
    serviceDate : {
        type : Date,
        required : true 
    },
    zipCode : {
        type : Number,
        required : true 
    },
    fullAddress : {
        type : String,
        required : true 
    },
    bookedAt : {
        type : Date,
        default : Date.now()
    }

})
module.exports = new mongoose.model('Bookings', BookingsSchema);
