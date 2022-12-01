import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/">
                        <i className="bi-airplane-engines-fill me-2" />
                        Fun Vacation
                    </NavLink>
                    <NavLink
                        to="/vacations"
                    >
                        Vacations
                    </NavLink>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/order"
                            >
                                Order Now
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;