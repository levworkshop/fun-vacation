import { useNavigate } from "react-router-dom";
import { removeToken } from "./TokenManager";

function Logout() {
    const navigate = useNavigate();

    function handleClick() {
        removeToken();
        navigate('/login');
    }

    return (
        <button
            className="btn btn-link nav-link"
            onClick={handleClick}
        >
            Log Out
        </button>
    );
}

export default Logout;