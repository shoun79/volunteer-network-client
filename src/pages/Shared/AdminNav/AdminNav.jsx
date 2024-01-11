import { Sidebar } from 'flowbite-react';
import logo from './../../../assets/logos/logo.png';

import { HiChartPie, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <Sidebar className='w-full ' aria-label="Sidebar with logo branding example ">

            <Link to='/'>
                <img className='h-6 mb-4' src={logo} alt="logo" />
            </Link>

            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/admin/volunteers'>
                        <Sidebar.Item icon={HiChartPie}>

                            Volunteer register list


                        </Sidebar.Item>
                    </Link>
                    <Link to='/admin/add-event'>
                        <Sidebar.Item icon={HiViewBoards}>
                            Add Event
                        </Sidebar.Item>

                    </Link>


                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar >
    );
};

export default AdminNav;