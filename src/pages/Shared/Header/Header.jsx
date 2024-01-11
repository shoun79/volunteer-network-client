//import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import logo from './../../../assets/logos/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const hendleLogout = () => {
        logOut()
            .then(() => {

                Swal.fire({
                    title: "Good job!",
                    text: "Sign-out successful!",
                    icon: "success"
                });
                navigate('/login')


            }).catch((error) => {
                console.log(error.message);
            });
    }
    return (

        <Navbar fluid rounded>
            <Link to='/'>
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </Link>
            <div className="flex md:order-2">
                {
                    user ? <><NavLink className="mr-4 mt-2 hidden lg:block">{user.displayName}</NavLink>
                        <Link className='mr-4' ><Button onClick={hendleLogout} color="blue">Logout</Button></Link>

                    </> : <Link className='mr-4' to='/register'><Button color="blue">Register</Button></Link>
                }
                <Link to='/admin/volunteers'><Button color="dark">Admin</Button></Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Donation</NavLink>
                {
                    user && <NavLink to='/my-events'>My Events</NavLink>
                }
                <NavLink to='/'>Blog</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;