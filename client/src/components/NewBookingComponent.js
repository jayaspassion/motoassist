import '../App.css';
const NewBookingComponent=(props) =>{

    const { mobile, bikeManufacturer, bikeNumber, serviceDate, zipCode, fullAddress, 
            setMobile, setBikeManufacturer, setBikeNumber,setServiceDate, setZipCode, setFullAddress, handleBooking 
            }  
            = {...props};

    const onChangeMobile = (event) => {
        setMobile(event.target.value);
    }
    const onChangeBikeManufacturer = (event) => {
        setBikeManufacturer(event.target.value)
    }
    const onChangeBikeNumber = (event) => {
        setBikeNumber(event.target.value)
    }
    const onChangeServiceDate= (event) => {
        setServiceDate(event.target.value)
    }
    const onChangeZipCode= (event) => {
        setZipCode(event.target.value)
    }            
    const onChangeFullAddr = (event) => {
        setFullAddress(event.target.value)
    }
return(
        <div className="col-md-12">
            <br/>
        <h2 style={{ display: "flex", justifyContent: "center" }}>Fill in the details and book your service now!</h2>
        
        <div className="card card-container">
            <form onSubmit={handleBooking}>
                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="mobile">Mobile : </label>
                    <input
                        type='text'
                        className='form-control'
                        name='mobile'
                        value={mobile}
                        onChange={onChangeMobile} 
                        required/>
                </div>

                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="bikeManufacturer" default={bikeManufacturer} required>Bike Manufacturer</label>
                    <select name='fileType' className='form-control' onChange={onChangeBikeManufacturer}>
                        <option value='Yamaha'>Yamaha</option>
                        <option value='RoyalEnfield' > Royal Enfield</option>
                        <option value='Suzuki'>Suzuki</option>
                        <option value='TVS'>TVS</option>  
                        <option value='Honda'>Honda</option>                  
                    </select>
                </div>

                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="bikeNumber">Bike Number : </label>
                    <input
                        type='text'
                        className='form-control'
                        name='bikeNumber'
                        value={bikeNumber}
                        onChange={onChangeBikeNumber} 
                        required/>
                </div>

                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="serviceDate">Service Date : </label>
                    <input
                        type='date'
                        className='form-control'
                        name='serviceDate'
                        value={serviceDate}
                        onChange={onChangeServiceDate} 
                        required/>
                </div>

                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="zipCode">Zip Code : </label>
                    <input
                        type='text'
                        className='form-control'
                        name='zipCode'
                        value={zipCode}
                        onChange={onChangeZipCode} 
                        required/>
                </div>     
                <div className='form-group' style={{ display: "flex", justifyContent: "left" }}>
                    <label htmlFor="fullAddress">Full Address : </label>
                    <input
                        type='text'
                        className='form-control'
                        name='fullAddress'
                        value={fullAddress}
                        onChange={onChangeFullAddr} 
                        required/>
                </div>                                              
                <div className="form-group" style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn-header">Book Now</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default NewBookingComponent ;