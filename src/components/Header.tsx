import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import { getToken, verifyToken } from "../auth/TokenManager";
import { useContext } from "react";
import { AppContext } from "../App";

function Header() {
    const context = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <i className="bi bi-airplane-engines-fill me-2"></i>
                    Fun Vacation
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/order" className="nav-link">
                                Order Now
                            </NavLink>
                        </li>
                        {verifyToken() &&
                            <li className="nav-item">
                                <NavLink to="/vacations" className="nav-link">
                                    Vacations
                                </NavLink>
                            </li>
                        }
                        {context?.admin &&
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link">
                                    Users Manager
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>

                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <NavLink to="/signup" className="nav-link">
                            Sign Up
                        </NavLink>
                    </li>
                    {!verifyToken() &&
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    }
                    {verifyToken() &&
                        < li className="nav-item">
                            <Logout />
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;
