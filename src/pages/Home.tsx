import { ChangeEvent, useEffect, useState } from "react";
import Title from "../components/Title";

interface VacationPackage {
    _id?: string;
    date: string;
    location: string;
    price: number;
}

enum SortDirection {
    asc = 'asc',  // A-Z
    desc = 'desc' //Z-A
}

function Home() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
    const [sort, setSort] = useState(SortDirection.asc);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/vacations')
            .then(res => res.json())
            .then(json => {
                setVacations(json);
            });
    }, []);

    function handleSort(e: ChangeEvent<HTMLSelectElement>) {
        const direction = e.target.value as SortDirection;
        setSort(direction);

        let result = [...vacations];
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
        const result = [...vacations].filter(vacation =>
            vacation.location.toLowerCase().includes(term)
        )

        setVacations(result);
    }

    function formatDate(value: string) {
        return new Date(value).toLocaleDateString()
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
                    disabled={vacations.length === 0}
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
                            <tr key={vacation._id}>
                                <td>{formatDate(vacation.date)}</td>
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