import { Button } from 'flowbite-react';
import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
const Login = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const hendleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })

            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=' flex justify-center mt-6'>
            <div className='border p-6 py-28 w-full md:w-1/3'>
                <h3 className='font-bold text-3xl mb-6 text-center'>Login With</h3>
                <div className="flex max-w-md flex-col gap-4">
                    <Button onClick={hendleGoogleLogin} color="light" pill> Continue With Google</Button>
                    <p className='mt-2 text-center'>Do not have an account? <Link className='text-blue-600 font-bold' to='/register' >Create an account</Link> </p>
                </div>

            </div>
        </div>
    );
};

export default Login;