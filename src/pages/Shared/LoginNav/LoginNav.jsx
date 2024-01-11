import { Link } from 'react-router-dom';
import logo from './../../../assets/logos/logo.png';

const LoginNav = () => {
    return (
        <div className='flex  mt-4 justify-center'>
            <Link className='' to='/'>
                <img src={logo} className="h-16" alt="Logo" />
            </Link>
        </div>
    );
};

export default LoginNav;