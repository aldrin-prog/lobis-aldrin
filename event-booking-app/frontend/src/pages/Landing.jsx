import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Landing = () => {
    const upcomingEvents = [
        { id: 1, name: 'Summer Music Festival', date: '2023-07-15', venue: 'Central Park' },
        { id: 2, name: 'Tech Conference 2023', date: '2023-08-22', venue: 'Convention Center' },
        { id: 3, name: 'Food & Wine Expo', date: '2023-09-10', venue: 'City Hall' },
    ]
  return (
    <>
      <main>
        <Header />
        {/* <section className=" py-12 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="card shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title">{event.name}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.venue}
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-end p-4">
                    <a href={`/events/${event.id}`} className="btn btn-outline">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/events" className="btn">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};
export default Landing;
