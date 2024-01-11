import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import VolunteerSingle from './VolunteerSingle';
const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch('https://volunteer-network-server-ecru.vercel.app/volunteers', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('volunteer-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setVolunteers(data.data);
                }

            })
    }, [refresh])

    return (
        <div>
            <h3 className='font-bold text-3xl ml-2'>Volunteer register list</h3>
            <div className='border-t-8 border-l-8 border-gray-200 border-r-[40px] border-b-[40px] p-6 rounded-xl mt-6'>
                <div className="overflow-x-auto ">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Email ID</Table.HeadCell>
                            <Table.HeadCell>Registating Date</Table.HeadCell>
                            <Table.HeadCell>Volunteer List</Table.HeadCell>
                            <Table.HeadCell>
                                Action
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                volunteers?.map(volunteer => <VolunteerSingle
                                    key={volunteer._id}
                                    volunteer={volunteer}
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                ></VolunteerSingle>)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;