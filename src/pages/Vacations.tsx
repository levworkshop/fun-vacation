import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import Title from "../components/Title";
import { VacationPackage } from "./Home";

function Vacations() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);

    useEffect(() => {
        fetch('http://localhost:3000/vacations')
            .then(res => res.json())
            .then(json => {
                setVacations(json);
            })
    }, []);

    return (
        <>
            <Title
                mainText="Vacations"
                subText="manage vacation packages"
            />

            <AddForm />

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vacations.map(vacation =>
                        <tr key={vacation._id}>
                            <td>{vacation.date}</td>
                            <td>{vacation.location}</td>
                            <td>{vacation.price}</td>
                            <td>
                                <button className="btn btn-default">
                                    <i className="bi bi-pen" />
                                </button>
                                <button className="btn btn-default ms-2">
                                    <i className="bi bi-trash" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Vacations;