import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logout from "../auth/Logout";
import User from "./User";

function Header() {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('user');
        if (!name) return;
        setUserName(name);
    }, []);

    function handleLogout() {
        localStorage.clear();
        setUserName('');
        navigate('/login');
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/">
                        <i className="bi-airplane-engines-fill me-2" />
                        Fun Vacation
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/order"
                                >
                                    Order Now
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/vacations"
                                >
                                    Vacations
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/admin"
                                >
                                    Admin Only
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav d-flex">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/signup"
                                >
                                    Sign Up
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Logout handler={handleLogout} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <User userName={userName} />
        </header>
    );
}

export default Header;