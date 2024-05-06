import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg"
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const {user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{

        })
        .catch(error => {
            console.log(error);
        })
    }

    const navItems = <>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/about'>About</Link></li>
     <li><Link to='/login'>Login</Link></li>
     {
        user?.email ? <>
        <li><Link to='/bookings'>My Bookings</Link></li>
        <li><button onClick={handleLogOut}>LogOut</button></li> 
        </>
        : <li><Link to='/login'>Login</Link></li>
     }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                     {navItems} 
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;