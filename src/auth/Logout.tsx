import { useNavigate } from "react-router-dom";
import { removeToken } from "./tokenMgmt";

function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        removeToken();
        navigate('/login');
    }

    return (
        <a
            onClick={handleLogout}
            className="nav-link"
        >
            Log Out
        </a>
    );
}

export default Logout;