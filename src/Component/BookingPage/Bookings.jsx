import React from 'react'
import '../BookingPage/Booking.css'
import './Bookingtable/Bookingstable'
import Bookingstable from './Bookingtable/Bookingstable'
import { NavLink } from 'react-router-dom'


const Bookings = ({bookingdata}) => {
  return (
    <div className='bookingbox'>
        <div className='bookingtitlediv'>
        <div className='bookingtitle'>Bookings</div>
        {/* <div className='newbknbtn'>New Booking</div> */}
        <NavLink to="/NewBooking" className='newbknbtn'  >New Booking</NavLink>

        </div>
        <div>
          
        </div>
        <div>

            <Bookingstable data={bookingdata}/>
        </div>

        

        
    </div>
  )
}

export default Bookings