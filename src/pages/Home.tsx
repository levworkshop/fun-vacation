import { ChangeEvent, useState } from "react";
import Title from "../components/Title";

interface VacationPackage {
    id?: string;
    date: string;
    location: string;
    price: number;
}

enum SortDirection {
    asc = 'asc',  // A-Z
    desc = 'desc' //Z-A
}

const data: Array<VacationPackage> = [
    {
        id: 'a1',
        date: '01/01/23',
        location: 'New York',
        price: 1000
    },
    {
        id: 'a3',
        date: '01/01/23',
        location: 'Ibiza',
        price: 500
    }
    ,
    {
        id: 'a2',
        date: '01/01/23',
        location: 'London',
        price: 500
    },
];

function Home() {
    const [vacations, setVacations] = useState(data);
    const [sort, setSort] = useState(SortDirection.asc);
    const [search, setSearch] = useState('');

    function handleSort(e: ChangeEvent<HTMLSelectElement>) {
        const direction = e.target.value as SortDirection;
        setSort(direction);

        let result = [...data];
        if (direction === SortDirection.desc) {
            result.sort((a, b) =>
                a.location > b.location ? -1 : a.location < b.location ? 1 : 0
            )
        }
        else {
            result.sort((a, b) =>
                a.location < b.location ? -1 : a.location > b.location ? 1 : 0
            )
        }

        setVacations(result);
    }

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearch(value);

        const term = value.toLowerCase();
        const result = data.filter(vacation =>
            vacation.location.toLowerCase().includes(term)
        )

        setVacations(result);
    }

    return (
        <>
            <Title />

            <div className="d-flex px-4 w-50 my-5 bg-light">
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control me-4"
                    value={search}
                    onChange={handleSearch}
                />
                <select
                    className="form-select"
                    value={sort}
                    onChange={handleSort}
                >
                    <option value={SortDirection.asc}>Location A-Z</option>
                    <option value={SortDirection.desc}>Location Z-A</option>
                </select>
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