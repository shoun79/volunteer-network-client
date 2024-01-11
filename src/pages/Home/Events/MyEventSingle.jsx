import { Button, Card } from "flowbite-react";
import Swal from "sweetalert2";

const MyEventSingle = ({ booking, setRefresh, refresh }) => {
    const { banner, date, eventTitle, _id } = booking;
    const hendleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === 'success') {
                            setRefresh(!refresh)
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your Booking has been Cancel.",
                                icon: "success"
                            });
                        }

                    })

            }
        });

    }
    return (
        <Card className="" imgSrc={banner} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {eventTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {date}
            </p>

            <Button onClick={() => hendleDelete(_id)} className="">Cancel</Button>

        </Card>
    );
};

export default MyEventSingle;