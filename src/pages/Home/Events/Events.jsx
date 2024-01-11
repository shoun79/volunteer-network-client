
import { useEffect, useState } from "react";

import EventSingle from "./EventSingle";
import { useLoaderData } from "react-router-dom";
import { Button, Select } from "flowbite-react";

const Events = () => {
    const [events, setEvents] = useState([]);
    const { totalEvents } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const options = [5, 10, 20];
    const totalPages = Math.ceil(totalEvents / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/events?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })


    }, [currentPage, itemsPerPage]);

    const hendleSeletedChange = (e) => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }

    return (
        <>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3  gap-4">

                {
                    events.map(event => <EventSingle
                        key={event._id}
                        event={event}
                    ></EventSingle>)
                }



            </div>
            <p>Current Page: {currentPage}</p>
            <div className="flex mt-3 justify-center pb-6">

                {
                    pageNumbers.map(number => <Button className="mr-2"
                        key={number}
                        onClick={() => setCurrentPage(number)}
                    >{number + 1}</Button>)
                }
                <Select required onChange={hendleSeletedChange}>
                    {
                        options.map(option => <option value={option}
                            key={option}
                        >{option}</option>)
                    }

                </Select>

            </div>
        </>
    );
};

export default Events;