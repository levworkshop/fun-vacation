import Title from "../components/Title";

function Signup() {
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
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
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