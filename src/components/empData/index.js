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
        filterusrlist: [],
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

        let compdata = (a, b) => {
            if (devState.order === 'descend') {
                if (a[heading] === 'undefined') {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
    }

    let sortedusrs = devState.filterusrlist.sort(compdata);

    setDevState({
        ...devState,
        filterusrlist: sortedusrs
    });

};

const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = devState.users.filter(item => {
        let values = item.name.first.toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setDevState({
        ...devState,
        filteredUsers: filterusrlist
    });
};

useEffect(() => {
    API.getUsers().then(results => {
        setDevState({
            ...devState,
            users: results.data.results,
            filterusrlist: results.data.results
        });
    });
}, []);

return (
    <DataAreaContext.Provider
        value={{ devState, handleSearchChange, handleSort }}
    >
        <Nav />
        <div className="data-area">
            {devState.sortedusrs.length > 0
                ? <DataTable />
                : <div></div>
            }
        </div>
    </DataAreaContext.Provider>
);


export default DataArea;