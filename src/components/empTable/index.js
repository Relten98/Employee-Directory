// Import our required vars
import "../empData";
import react from "react";

let DataContext = React.createContext({});

let empTable = () => {
    const context = useContext(DataContext);

    return (

        <div className="empTable mt-5">
            <table
                id="table"
                className="table"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <empBody />
            </table>
        </div>
    );
}

export default empTable;