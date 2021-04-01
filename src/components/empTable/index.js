import React, { useContext } from "react";

// Import our required vars
import EmpBody from "../EmpBody";

// Context
import EmpContext from "../../utils/EmpContext";



let EmpTable = () => {
    const context = useContext(EmpContext);

    return (

        <div className="emptable">
            <table
                id="table"
                className="table"
            >
                <thead>
                    <tr>
                        {context.developerState.Userprofile.map(({ name, width }) => {
                            return (
                                <th
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
                <EmpBody />
            </table>
        </div>
    );
}

export default EmpTable;