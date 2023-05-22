import FormLayout from "../components/FormLayout";
import Title from "../components/Title";

function SignUp() {
    return (
        <>
            <Title
                mainText="Sign Up"
                subText="register to the application"
            />

            <FormLayout>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                    // value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                    // value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                    // value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-info me-3"
                    >
                        Sign Up
                    </button>
                </div>
            </FormLayout>
        </>
    );
}

export default SignUp;