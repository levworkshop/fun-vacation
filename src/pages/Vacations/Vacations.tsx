import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { formatPrice } from "../../utils/utils";
import AddForm from "./AddForm";

export interface IVacation {
    _id: number;
    date: string;
    location: string;
    price: number;
}

function Vacations() {
    let x = 5;
    const [vacations, setVacations] = useState<Array<IVacation>>([]);

    function getVacations() {
        fetch('http://localhost:3000/vacations/')
            .then(response => response.json())
            .then(json => {
                setVacations(json);
            })
    }

    useEffect(getVacations, []);

    function addVacation(newVacation: IVacation) {
        const updated = [...vacations];
        updated.push(newVacation);
        setVacations(updated);
    }

    function delVacation(vacation: IVacation) {
        fetch(`http://localhost:3000/vacations/${vacation._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                const updated = [...vacations].filter(
                    vacationItem => vacationItem._id !== vacation._id
                );

                setVacations(updated);
            })
    }

    return (
        <>
            <Title
                main="Vacations"
                sub="manage vacation packages"
            />

            {
                vacations.length === 0 &&
                <div
                    className="alert alert-info m-5"
                >
                    No vacations
                </div>
            }

            <AddForm addVacation={addVacation} />

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="w-25">Date</th>
                        <th className="w-25">Location</th>
                        <th className="w-50">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vacations.map(vacation =>
                            <tr key={vacation._id}>
                                <td>{vacation.date}</td>
                                <td>{vacation.location}</td>
                                <td>{formatPrice(vacation.price)}</td>
                                <td>
                                    <Link
                                        to={`/edit/${vacation._id}`}
                                        className="btn btn-default"
                                    >
                                        <i className="bi-pen"></i>
                                    </Link>

                                    <button
                                        onClick={() => delVacation(vacation)}
                                        className="btn btn-default"
                                    >
                                        <i className="bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Vacations;