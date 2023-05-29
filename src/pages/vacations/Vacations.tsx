import { createContext, useContext, useEffect, useState } from "react";
import AddForm from "../../components/AddForm";
import Title from "../../components/Title";
import { VacationPackage } from "../Home";
import { addVacations, deleteVacation, getVacations } from "../../services/ApiService";
import NoDataMessage from "../../components/NoDataMessage";
import { formatDate, formatPrice } from "../../services/Formatter";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import { AppContext } from "../../App";

interface VacationContextType {
    vacations: Array<VacationPackage>
    onDelete: Function
    vacationId?: string
}

export const VacationContext = createContext<VacationContextType | null>(null);

function Vacations() {
    const [vacations, setVacations] = useState<Array<VacationPackage>>([]);
    const context = useContext(AppContext);

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
            {context?.userName &&
                <div className="p-2">Welcome {context.userName}</div>
            }

            <Title
                mainText="Vacations"
                subText="manage vacation packages"
            />
            <VacationContext.Provider value={{
                vacations,
                onDelete
            }}>

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
                            <TableRow
                                key={vacation._id}
                                vacation={vacation}
                                onDelete={onDelete}
                            />
                        )}
                    </tbody>
                </table>
            </VacationContext.Provider>

            {vacations.length === 0 &&
                <NoDataMessage />
            }
        </>
    );
}

export default Vacations;