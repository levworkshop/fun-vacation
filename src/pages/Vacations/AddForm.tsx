import { useState } from "react";

function AddForm() {
    const [date, setDate] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [price, setPrice] = useState<number>(1);
    const [error, setError] = useState<string>('');

    function handleClick() {

    }

    return (
        <>
            <div className="bg-light d-flex p-4 align-items-center">
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Date"
                />

                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Location"
                />

                <input
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                    className="form-control"
                    type="number"
                    placeholder="Price"
                />

                <button
                    onClick={handleClick}
                    className="btn btn-info ms-3"
                >
                    Add
                </button>
            </div>

            {
                error &&
                <div className="text-danger">
                    {error}
                </div>
            }
        </>
    );
}

export default AddForm;