// Imports for react.
import React from 'react';
import "./style.css";
import api from "../../utils/api";
import "../empTable";
import dataContext from "../empTable"


// The core empData that will be used to fill out with employees.
let empData = () => {
    let [devState, setDevState] = useState({
        users: [],
        // This is going to be important for sorting later on.
        order: 'descend',
        filterlist: [],
        // The display information that we will use when building out employee table
        headers: [
            { name: 'name' },
            { name: 'DOB' },
            { name: 'phone' },
            { name: 'email' },
            { name: 'IMG' }
        ]
    });

    // This is what is going to set the order of the table based on either ascending, or descending
    let sortData = (header) => {
        if (devState.order === 'ascend') {
            setDevState({
                order: 'descend'
            })
        } else {
            setDevState({
                order: 'ascend'
            })
        }

        let compdata = (a , b) => {

        }
    }

    let sortedusrs = devState.filterlist.sort(compdata);

    setDevState({
        ...devState,
        sfilterlist: sortedusrs
    });


// Our DOM elements will go below, just need to get these comparitors to function.
return (
    <div>
        
    </div>
)
}
// Exports our information
export default empData;
// OOOOOWA-AH-AH-AH