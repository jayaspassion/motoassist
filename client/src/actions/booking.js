import axios from 'axios'

export const createBooking = async(token, data) =>{

    const res = await axios.post('/api/bookings/newbooking', data,
    {
        headers:{
            Authorization: `Bearer ${token}`        
        }
    });    
    return res ;
}

export const getBookings = async(token, addedby) =>{

    const res = await axios.get(`/api/bookings/getallbookings/${addedby}`,
    {
        headers:{
            Authorization: `Bearer ${token}`        
        }

    });    
    return res ;
}