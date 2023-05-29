import { useContext, useState } from "react";
import FormLayout from "../components/FormLayout";
import Title from "../components/Title";
import { toast } from "react-toastify";
import { login, signup } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { setToken } from "./TokenManager";
import { AppContext } from "../App";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const context = useContext(AppContext);

    function validate(): boolean {
        if (!email) { // also check that email is required with regex
            toast.error('email is required.')
            return false
        }

        if (!password || password.length < 6) {
            toast.error('Password must contain at least 6 characters.')
            return false
        }

        return true
    }

    function handleClick() {
        if (!validate()) {
            return;
        }

        login({
            email,
            password
        })
            .then((user) => {
                setToken(user.token)
                // localStorage.setItem('admin', JSON.stringify(user.isAdmin))
                if (context) {
                    context.setAdmin(user.isAdmin || false);
                    context.setUserName(user.name);
                }

                navigate('/vacations')
            })
    }

    return (
        <>
            <Title
                mainText="Login"
            />

            <FormLayout>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control me-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-info me-3"
                        onClick={handleClick}
                    >
                        Login
                    </button>
                </div>
            </FormLayout>
        </>
    );
}

export default Login;