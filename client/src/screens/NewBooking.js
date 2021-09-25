import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import {createBooking} from '../actions/booking';
import  NewBookingComponent from '../components/NewBookingComponent';

const NewBooking = () => {
    let history = useHistory();

    const [mobile, setMobile] = useState('');
    const [bikeManufacturer, setBikeManufacturer] = useState('Yamaha');
    const [bikeNumber, setBikeNumber] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [fullAddress, setFullAddress] = useState('');

    const currentUser = useSelector(state => state.authReducer).user;

    const handleBooking = async (event) => {
        event.preventDefault();

            try 
            {
                const token = JSON.parse(window.localStorage.getItem('user')).token
                
                const data = {
                    addedBy: currentUser.email,
                    mobileNumber: mobile,
                    bikeManufacturer: bikeManufacturer,
                    bikeNumber : bikeNumber,
                    serviceDate : serviceDate,
                    zipCode : zipCode,
                    fullAddress : fullAddress
                }

                const res = await createBooking(token, data);
                toast.success("Booking Successful! Go to Dashboard");

            }
            catch (err) {
                console.log(err);
                toast.error(err.response.data.message)
            }
        }

    
    return (
        <div className='col-md-12'>
            < NewBookingComponent 
                mobile = {mobile}
                bikeManufacturer = {bikeManufacturer} 
                bikeNumber = {bikeNumber}
                serviceDate = {serviceDate}
                zipCode = {zipCode}
                fullAddress = {fullAddress}
                setMobile = {setMobile}
                setBikeManufacturer = {setBikeManufacturer}
                setBikeNumber = {setBikeNumber}
                setServiceDate = {setServiceDate}
                setZipCode = {setZipCode}
                setFullAddress = {setFullAddress}
                handleBooking = {handleBooking}

            />
         </div>
    )
}
export default NewBooking;