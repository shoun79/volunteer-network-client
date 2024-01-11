import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const eventInfo = {
        email: user?.email,
        banner: event.banner,
        date: event.date,
        description: event.description,
        eventTitle: event.eventTitle
    }
    useEffect(() => {
        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => {

                if (data.status === 'success') {
                    setEvent(data.data)
                }
            })
    }, [id]);

    const hendleBooking = () => {
        if (!user) {
            navigate('/login');
            return
        }
        else {
            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.status === 'success') {

                        Swal.fire({
                            title: "Good job!",
                            text: data.message,
                            icon: "success"
                        });
                        navigate('/my-events')

                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
    return (
        <div className="mt-8">
            <Card
                className="max-w-xl mx-auto"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={event.banner}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {event.eventTitle}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {event.date}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {event.description}
                </p>
                <div className="flex justify-end">
                    <Button onClick={hendleBooking} className="px-8  font-bold">Book</Button>
                </div>
            </Card>
        </div>
    );
};

export default EventDetails;