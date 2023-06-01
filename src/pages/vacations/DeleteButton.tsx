import { useContext } from "react";
import { VacationContext } from "./Vacations";

interface Props {
    vacationId: string,
    // onDelete: Function
}

function DeleteButton({ vacationId }: Props) {
    const context = useContext(VacationContext);

    function handleClick() {
        if (!context) return;

        context.onDelete(vacationId);
    }

    return (
        <button
            className="btn btn-default ms-2"
            onClick={handleClick}
        >
            <i className="bi bi-trash" />
        </button>
    );
}

export default DeleteButton;