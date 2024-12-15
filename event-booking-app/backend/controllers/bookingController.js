import Booking from '../models/Booking.js';
import Event from '../models/Event.js';
// import createPaymentIntent from '../utils/stripe.js';
const createBooking = async (req, res,next) => {
  try {
    const{eventId}=req.params;
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (event.slotsAvailable <= 0) return res.status(400).json({ message: 'Event is full' });

    const booking = await Booking.create({ user: req.user.id,event: eventId });
    event.slotsAvailable -= 1;
    await event.save();
    // res.status(201).json({ message: 'Booking created successfully', booking });
    next();
  } catch (error) {
    // res.status(500).json({ message: 'Error creating booking', error });
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

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;
    // Validate paymentStatus
    if (!['pending', 'confirmed', 'rejected'].includes(paymentStatus)) {
      return res.status(400).json({ message: 'Invalid payment status' });
    }

    // Find and update booking
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({
      message: 'Booking status updated successfully',
      booking: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};
const processPayment=async(req,res,next)=>{
    try {
        const {amount}=req.body;
        await createPaymentIntent(amount);
        req.body.paymentStatus="confirmed";
        // res.status(200).json({message:'Payment successfully process'});
        next();
    } catch (error) {
        res.status(500).json({message:"Error while processing payment",error});
    }
}
export { createBooking, processPayment ,getUserBookings, updateBookingStatus };