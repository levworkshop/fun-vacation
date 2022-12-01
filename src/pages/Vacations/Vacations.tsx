import { useState } from "react";
import Title from "../../components/Title";
import { formatPrice } from "../../utils/utils";

interface IVacation {
    _id: number;
    date: string;
    location: string;
    price: number;
}

function Vacations() {
    const [vacations, setVacations] = useState<Array<IVacation>>([]);

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

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="w-25">Date</th>
                        <th className="w-25">Location</th>
                        <th className="w-50">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vacations.map(vacation =>
                            <tr key={vacation._id}>
                                <td>{vacation.date}</td>
                                <td>{vacation.location}</td>
                                <td>{formatPrice(vacation.price)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Vacations;