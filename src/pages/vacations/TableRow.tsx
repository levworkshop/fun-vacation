import { Link } from "react-router-dom";
import { formatDate, formatPrice } from "../../services/Formatter";
import { VacationPackage } from "../Home";
import DeleteButton from "./DeleteButton";

interface Props {
    vacation: VacationPackage,
    onDelete: Function
}

function TableRow({ vacation, onDelete }: Props) {
    return (
        <tr>
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
                <DeleteButton
                    vacationId={vacation._id as string}
                    onDelete={onDelete}
                />
            </td>
        </tr>
    );
}

export default TableRow;