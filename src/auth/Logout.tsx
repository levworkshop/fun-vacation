import { useNavigate } from "react-router-dom";
// import { removeToken } from "./tokenMgmt";

function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        // removeToken();
        localStorage.clear();
        navigate('/login');
    }

    return (
        <button
            onClick={handleLogout}
            className="btn btn-link nav-link"
        >
            Log Out
        </button>
    );
}

export default Logout;