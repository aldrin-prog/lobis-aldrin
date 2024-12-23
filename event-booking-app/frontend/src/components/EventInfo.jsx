import { useEvent } from "../context/AppContext";
import Payment from "./Payment";
import RegisterEvent from "./RegisterEvent";
import TimerEvent from "./TimerEvent";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const EventInfo = (props) => {
    const { event, booked } = props;
    // console.log(isBooked);
    const { STRIPE_KEY } = useEvent();
    const stripePromise = loadStripe(STRIPE_KEY);
    return (

        <div className="min-h-screen bg-base-200" >
            <div className="hero min-h-[50vh]" style={{
                backgroundImage: `url(${event.image})`,
            }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center" >
                    <div className="max-w">
                        <h1 className="text-5xl font-bold text-white">{event.title}</h1>
                        {/* <p className="py-6">Join us for a day of cutting-edge technology discussions and networking!</p> */}
                        <div className=" md:flex justify-center space-x-2 space-y-2 md:space-y-0 mt-5">
                            <div className="px-4 py-2 text-lg h-max badge badge-primary w-max">Date: {event.date}</div>
                            <div className="px-4 py-2 text-lg h-max badge badge-secondary md:w-max">Location: {event.venue}</div>
                        </div>
                        {/* <TimerEvent/> */}
                        {
  booked ? (
    booked.paymentStatus === 'pending' ? (
      <div className="mt-4">
        <p className="text-white text-xl mb-3">Complete your Registration in this event</p>
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
      </div>
    ) : booked.paymentStatus === 'confirmed' ? (
      <div className="h-max badge badge-info w-max text-lg mt-5 px-10 py-2">You booked this event</div>
    ) : (
      <div className="text-white text-xl mt-4">
        Payment status is unknown. Please contact support.
      </div>
    )
  ) : (
    <RegisterEvent event={event} />
  )
}


                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <div className="summernote-container" dangerouslySetInnerHTML={{ __html: event.description }} /> */}
                        <h1 className="text-xl">Descripton</h1>
                        {event.description}
                    </div>
                </div>


            </div>
        </div>
    );
}
export default EventInfo