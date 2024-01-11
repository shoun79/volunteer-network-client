import { Outlet } from "react-router-dom";
import LoginNav from "../pages/Shared/LoginNav/LoginNav";

const LoginLayout = () => {
    return (
        <div>
            <LoginNav></LoginNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;