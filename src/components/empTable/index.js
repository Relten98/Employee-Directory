import React, { useContext } from "react";
// Import our required vars

// Context
import EmpContext from "../../utils/EmpContext";

import EmpBody from "../EmpBody";


let EmpTable = () => {
    const context = useContext(EmpContext);

    return (

        <div className="EmpTable mt-5">
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
                <EmpBody />
            </table>
        </div>
    );
}

export default EmpTable;