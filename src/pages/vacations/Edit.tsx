import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { editVacation, getVacationById } from "../../services/ApiService";

function Edit() {
    const { id } = useParams();
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(1);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) return;

        getVacationById(id)
            .then(json => {
                const date = new Date(json.date);
                setDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
                setLocation(json.location);
                setPrice(json.price);
            })
    }, [id])

    function validate(): boolean {
        if (!date) {
            setError('date is required.')
            return false
        }
        if (!location && location.length < 3) {
            setError('Location is required.')
            return false
        }

        if (price <= 0) {
            setError('No free vacations.')
            return false
        }
        setError('')
        return true
    }

    function handleClick() {
        if (!validate()) {
            return
        }

        if (!id) return;

        editVacation(id, {
            date,
            location,
            price
        })
            .then(json => {
                // return to the vacations page...
            })
    }

    return (
        <>
            <div className="m-4">

                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="id"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        className="form-control me-3"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        id="date"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control me-3"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="price"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control me-3"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                        id="price"
                    />
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-info me-3">
                    Update
                </button>
                <Link
                    to="/vacations"
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>
            </div>

        </>
    );
}

export default Edit;