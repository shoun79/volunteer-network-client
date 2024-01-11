import { Outlet } from "react-router-dom";
import AdminNav from "../pages/Shared/AdminNav/AdminNav";

const AdminLayout = () => {
    return (
        <div className="md:flex  space-y-4">
            <div className="md:me-14">
                <AdminNav></AdminNav>
            </div>
            <div className="w-full">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;