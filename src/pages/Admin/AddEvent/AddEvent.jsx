import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (value) => {
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
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
                    navigate('/')

                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="">
            <h3 className='font-bold text-3xl ml-2'>Add Event</h3>
            <div className=' p-6 rounded-xl mt-6 bg-gray-100'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">

                        <div className="md:flex justify-between ">
                            <div className="md:w-[45%]">
                                <Label htmlFor="event" value="Event Title" />
                                <TextInput className="mt-3"  {...register("eventTitle")} type="text" placeholder="Event Title" required />
                            </div>
                            <div className="md:w-[45%]">
                                <Label htmlFor="eventDate" value="Event Date" />
                                <TextInput className="mt-3"   {...register("date")} type="date" placeholder="Event Date" required />
                            </div>
                        </div>

                        <div className="md:flex justify-between ">
                            <div className="md:w-[45%]">
                                <Label htmlFor="description" value="Description" />
                                <Textarea rows={4} className="mt-3"  {...register("description")} type="text" placeholder="Description" required />
                            </div>
                            <div className="md:w-[45%]">
                                <Label htmlFor="banner" value="Banner" />
                                <TextInput className="mt-3"   {...register("banner")} type="text" placeholder="Banner Url" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;