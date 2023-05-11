import { useState } from "react";
import Title from "../components/Title";

interface VacationPackage {
    id?: string;
    date: string;
    location: string;
    price: number;
}

const data: Array<VacationPackage> = [
    {
        id: 'a1',
        date: '01/01/23',
        location: 'New York',
        price: 1000
    },
    {
        id: 'a2',
        date: '01/01/23',
        location: 'London',
        price: 500
    }
];

function Home() {
    const [vacations, setVacations] = useState(data);

    return (
        <>
            <Title />

            <div className="d-flex">
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control me-4"
                    />
                </div>
                <div>
                    <select
                        className="form-select"
                    >
                        <option>Location A-Z</option>
                        <option>Location Z-A</option>
                    </select>
                </div>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vacations.map(vacation =>
                            <tr key={vacation.id}>
                                <td>{vacation.date}</td>
                                <td>{vacation.location}</td>
                                <td>{vacation.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Home;