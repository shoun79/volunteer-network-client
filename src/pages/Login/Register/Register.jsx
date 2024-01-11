import { Button, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
const Register = () => {
    const { register, handleSubmit } = useForm();
    //const { registerUser } = useContext(AuthContext);
    //const navigate = useNavigate();
    const onSubmit = (value, e) => {

        fetch('http://localhost:5000/volunteers', {
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
                        text: "Successfully Register",
                        icon: "success"
                    });
                    e.target.reset();
                }
            })
            .catch(err => {
                console.log(err.message);
            })

        // registerUser(value.email, value.password)
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     })

    }
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 w-full md:w-1/3'>
                <h3 className='font-bold text-3xl mb-6'>Register as a volunteer</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                    <div>
                        <TextInput  {...register("name")} type="text" placeholder="Full Name" required />
                    </div>
                    <div>
                        <TextInput  {...register("email")} type="email" placeholder="Email" required />
                    </div>
                    {/* <div>
                        <TextInput  {...register("password")} type="password" placeholder="Password" required />
                    </div> */}
                    <div>
                        <TextInput  {...register("description")} type="text" placeholder="Description" />
                    </div>
                    <div>

                        <TextInput  {...register("date")} type="date" placeholder="Date" />
                    </div>
                    <div>
                        <TextInput defaultValue={"Organize Books at the library"} {...register("organize")} type="text" placeholder="Organize Books at the library" />
                    </div>

                    <Button type="submit">Register</Button>
                </form>
                <p className='mt-2 '>Already have an account? <Link className='text-blue-600 font-bold' to='/login' >Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;