import { FormEvent, useEffect, useState } from "react";
import FormLayout from "../components/FormLayout";
import Title from "../components/Title";
import { VacationPackage } from "./Home";
import { getVacations } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

function Order() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
    const [vacation, setVacation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [terms, setTerms] = useState(false);
    const [errors, setErros] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getVacations()
            .then(json => {
                setVacations(json);
            });
    }, []);

    function validate(): boolean {
        if (!vacation) {
            setErros('Where do you want to go? Please select a package')
            return false
        }
        if (!name) {
            setErros('Name is required')
            return false
        }
        // if (email && !RegExp.test(email)) {
        //     setErros('Email is invalid')
        //     return false
        // }
        if (!terms) {
            setErros('Please accept the terms')
            return false
        }

        setErros('');
        return true;
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!validate()) return;

        navigate('/checkout');
    }

    return (
        <>
            <Title
                mainText="Order Now"
                subText="quickly order a new vacation"
            />

            <FormLayout>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label">
                                Vacation Package *
                            </label>
                            <select
                                className="form-select"
                                value={vacation}
                                onChange={(e) => setVacation(e.target.value)}
                            >
                                <option value="">Please select...</option>
                                {
                                    vacations.map(pkg =>
                                        <option
                                            key={pkg._id}
                                            value={pkg._id}
                                        >
                                            {pkg.location}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Name *
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                placeholder="me@email.com"
                                type="text"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-check mt-4">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                            />
                            <label className="form-check-label">
                                I agree to terms...
                            </label>
                        </div>

                        {errors &&
                            <div className="text-danger">
                                {errors}
                            </div>
                        }

                        <button
                            className="w-100 btn btn-primary btn-lg mt-4"
                            type="submit"
                        >
                            Continue to checkout
                        </button>
                    </div>
                </form>
            </FormLayout>
        </>
    );
}

export default Order;