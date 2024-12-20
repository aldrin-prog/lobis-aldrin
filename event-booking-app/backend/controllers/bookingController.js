import Booking from '../models/Booking.js';
import Event from '../models/Event.js';
import createPaymentIntent from '../utils/stripe.js';
// import createPaymentIntent from '../utils/stripe.js';
const createBooking = async (req, res,next) => {
  try {
    const{id}=req.params;
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (event.slotsAvailable <= 0) return res.status(400).json({ message: 'Event is full' });

    const booking = await Booking.create({ user: req.user.id,event: id});
    event.slotsAvailable -= 1;
    await event.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
    // next()
  } catch (error) {
    // next();
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('event');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

const updateBookingStatus = async (req, res,next) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    // Validate paymentStatus
    if (!['pending', 'confirmed', 'rejected'].includes(paymentStatus)) {
        throw new Error("Invalid payment status");
    }

    // Find and update booking
    const booking = await Booking.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true, runValidators: true }
    );

    if (!booking) {
      // return res.status(404).json();
      throw new Error("Booking not found");
    }
    res.status(200).json({message:"Created payment payment intent",booking});
    // next();
  } catch (error) {
    // next(error);
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};
const processPayment=async(req,res,next)=>{
    try {
        const {amount}=req.body;
        const paymentIntent= await createPaymentIntent(amount);
        res.status(200).json({message:"Create payment intent",paymentIntent});
    } catch (error) {
      // next(error);
      console.error(error)
      res.status(500).json({message:"Server Error",error});
      // throw new Error(error.message);
    }
}
const getUserBookingByEvent=async (req,res)=>{
  try {
    const {eventId}=req.body;
    const booking=await Booking.findOne({user:req.user.id,event:eventId});
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({message:"Server Error",error});
  }
}
export { createBooking, processPayment ,getUserBookings, updateBookingStatus,getUserBookingByEvent };