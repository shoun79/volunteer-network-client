
import { Link } from "react-router-dom";

const EventSingle = ({ event }) => {
    const { _id, eventTitle, banner } = event;
    return (


        <Link to={`/event-details/${_id}`} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={banner}
                    alt=""
                />
                <div className="bg-orange-500 pb-6 text-center font-bold text-2xl text-white pt-4">
                    <h2>{eventTitle}</h2>
                </div>
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100  flex items-center justify-center">
                    <h4 className="text-white font-bold text-2xl">Details</h4>

                </div>
            </div>
        </Link>
    );
};

export default EventSingle;