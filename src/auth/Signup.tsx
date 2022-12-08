import { useState } from "react";
import Title from "../components/Title";

function Signup() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // todo: create an error component for this
    // const [error, setError] = useState<string>('');

    return (
        <div className="p-3 form-max-w m-auto">

            <Title
                main="Sign Up"
                sub="register to the application"
            />

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                className="btn btn-primary btn-lg"
            >
                Sign Up
            </button>
        </div>
    );
}

export default Signup;