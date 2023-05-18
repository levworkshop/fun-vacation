import { ChangeEvent, useEffect, useState } from "react";
import Title from "../components/Title";
import { getVacations } from "../services/ApiService";
import NoDataMessage from "../components/NoDataMessage";
import { formatDate, formatPrice } from "../services/Formatter";

export interface VacationPackage {
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
    const [origData, setOrigData] = useState<Array<VacationPackage>>([]);

    useEffect(() => {
        getVacations()
            .then(json => {
                setVacations(json);
                setOrigData(json);
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
        const result = [...origData].filter(vacation =>
            vacation.location.toLowerCase().includes(term)
        )

        setVacations(result);
    }

    function isDataEmpty(): boolean {
        return origData.length === 0;
    }

    return (
        <>
            <Title
                mainText="Our Offers"
                subText="our packages for this months"
            />

            <div className="d-flex px-4 w-50 my-5 bg-light">
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control me-4"
                    value={search}
                    onChange={handleSearch}
                    disabled={isDataEmpty()}
                />
                <select
                    className="form-select"
                    value={sort}
                    onChange={handleSort}
                    disabled={isDataEmpty()}
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
                                <td>{formatPrice(vacation.price)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {isDataEmpty() &&
                <NoDataMessage />
            }
        </>
    );
}

export default Home;