import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";


const VolunteerSingle = ({ volunteer, refresh, setRefresh }) => {
    const { date, email, name, organize, _id } = volunteer;
    const hendleDelete = (_id) => {
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
                fetch(`https://volunteer-network-server-ecru.vercel.app/volunteers/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === 'success') {
                            setRefresh(!refresh)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });


    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{organize}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => hendleDelete(_id)}>Del</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default VolunteerSingle;