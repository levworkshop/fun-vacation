interface Props {
    vacationId: string,
    onDelete: Function
}

function DeleteButton({ vacationId, onDelete }: Props) {
    return (
        <button
            className="btn btn-default ms-2"
            onClick={() => onDelete(vacationId)}
        >
            <i className="bi bi-trash" />
        </button>
    );
}

export default DeleteButton;