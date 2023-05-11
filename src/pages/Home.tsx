import Title from "../components/Title";

function Home() {
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
                        <option>--</option>
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
                    <tr>
                        <td>01/01/23</td>
                        <td>Location 1</td>
                        <td>$50</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Home;