import { useEffect, useState } from "react";
import AddForm from "../../components/AddForm";
import Title from "../../components/Title";
import { VacationPackage } from "../Home";
import { addVacations, deleteVacation, getVacations } from "../../services/ApiService";
import NoDataMessage from "../../components/NoDataMessage";
import { formatDate, formatPrice } from "../../services/Formatter";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Vacations() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);

    useEffect(() => {
        getVacations()
            .then(json => {
                setVacations(json);
            })
    }, []);

    function onAdd(vacation: VacationPackage) {
        addVacations(vacation)
            .then(json => {
                setVacations([
                    ...vacations,
                    json
                ])

                toast.success(`Vacation to ${json.location} has been added successfully`);
            })
    }

    async function onDelete(_id: string) {
        // deleteVacations(_id)
        //     .then(json => {
        //         getVacations()
        //             .then(json => {
        //                 setVacations(json)
        //             })
        //     })

        const res = await deleteVacation(_id);
        // const updated = await getVacations();

        const updated = [...vacations].filter(
            vacation => vacation._id !== _id
        )

        setVacations(updated);

        toast.success('Vacation has been deleted');
    }

    return (
        <>
            <Title
                mainText="Vacations"
                subText="manage vacation packages"
            />

            <AddForm onAdd={onAdd} />

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
                            <td>{formatDate(vacation.date)}</td>
                            <td>{vacation.location}</td>
                            <td>{formatPrice(vacation.price)}</td>
                            <td>
                                <Link
                                    to={`/edit/${vacation._id}`}
                                    className="btn btn-default"
                                >
                                    <i className="bi bi-pen" />
                                </Link>
                                <button
                                    className="btn btn-default ms-2"
                                    onClick={() => onDelete(vacation._id as string)}
                                >
                                    <i className="bi bi-trash" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {vacations.length === 0 &&
                <NoDataMessage />
            }
        </>
    );
}

export default Vacations;