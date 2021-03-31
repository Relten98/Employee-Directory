import React, { useContext } from "react";
// Import our required vars


// Context
import EmpContext from "../../utils/EmpContext";

import EmpBody from "../EmpBody";


let EmpTable = () => {
    const context = useContext(EmpContext);

    return (

        <div className="EmpTable">
            <table
                id="table"
                className="table"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
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