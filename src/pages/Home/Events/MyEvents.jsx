import { useContext, useEffect, useState } from "react";
import MyEventSingle from "./MyEventSingle";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
    const [bookings, setBooking] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://volunteer-network-server-ecru.vercel.app/bookings?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('volunteer-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBooking(data.data)
                }
                else {
                    //add logout method then navigate
                    navigate('/')
                }
            })
    }, [refresh, user.email, navigate])

    return (
        <div className="grid md:grid-cols-2 gap-6 mt-10">
            {
                bookings.map(booking => <MyEventSingle
                    key={booking._id}
                    booking={booking}
                    refresh={refresh}
                    setRefresh={setRefresh}
                ></MyEventSingle>)
            }
        </div>
    );
};

export default MyEvents;

