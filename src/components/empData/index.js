// Imports for react.
import React, { useState, useEffect } from 'react';
// import "./style.css";
import api from "../../utils/api";
import "../EmpTable";

// Data Context
import EmpContext from "../../utils/EmpContext";

// The core empData that will be used to fill out with employees.
let EmpData = () => {
    const [devState, setDevState] = useState({
        users: [],
        // This is going to be important for sorting later on.
        order: 'descend',
        filterUserList: [],
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
    let sortData = (heading) => {
        if (devState.order === 'ascend') {
            setDevState({
                order: 'descend'
            })
        } else {
            setDevState({
                order: 'ascend'
            })
        }

        const compareFnc = (a, b) => {
            if (devState.order === "ascend") {
                if (a[heading] === undefined) {
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
        const sortedUsers = devState.filteredUsers.sort(compareFnc);

        setDevState({
            ...devState,
            filterUserList: sortedUsers
        });

    };

    const handleSearchChange = event => {
        // Filters out content
        const filter = event.target.value;

        const filtereduserList = devState.users.filter(item => {

            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setDevState({
            ...devState,
            filterUserList: filtereduserList
        });
    };

    useEffect(() => {
        api.getUsers().then(results => {
            setDevState({
                ...devState,
                users: results.data.results,
                filterUserList: results.data.results
            });
        });
    }, []);

    return (
        <EmpContext.Provider
            value={{ devState, handleSearchChange, sortData }}
        >
            <div className="data-area">
                {devState.sortedusrs.length > 0
                    ? <empTable />
                    : <div></div>
                }
            </div>
        </EmpContext.Provider>
    );
};


export default EmpData;