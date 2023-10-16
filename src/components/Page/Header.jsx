import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center items-center gap-8 m-2 pb-12">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addCoffee">Add Coffee</NavLink>
            {/* <NavLink to="/updateCoffee">Update Coffee</NavLink> */}
            <NavLink to="/user">User</NavLink>
            <NavLink to="/singup">Sing up</NavLink>
        </div>
    );
};

export default Header;