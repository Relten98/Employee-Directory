// Imports for react.
import React, { useState, useEffect } from 'react';


import "./style.css";

import API from "../../utils/API";
import EmpTable from "../EmpTable";

// Fancy schmancy Nav bar
import Navbar from "../Navbar";

// Data Context
import EmpContext from "../../utils/EmpContext";

// The core empData that will be used to fill out with employees.
let EmpData = () => {
    const [devState, setDevState] = useState({
        users: [],
        // This is going to be important for sorting later on.
        order: 'descend',

        // The display information that we will use when building out employee table
        Userprofile: [
            { name: 'name' },
            { name: 'IMG' },
            { name: 'DOB' },
            { name: 'email' },
            { name: 'phone' }
        ],

        
        // This is an empty array that will be used to store filtered user data later on.
        filterUserList: [],

    });

    // This is what is going to set the order of the table based on either ascending, or descending
    let sortData = (Userprofile) => {
        if (devState.order === 'ascend') {
            setDevState({
                order: 'descend'
            })
        } else {
            setDevState({
                order: 'ascend'
            })
        }

        // This function what we are going to use to sort, and filter the user data information.
        const compareFunction = (a, b) => {

            // If the list is needed to go up, or needs to default.
            if (devState.order === "ascend") {
                if (a[Userprofile] === undefined) {
                    return 1;

                    // Otherwise return list in reverse, using names
                } else if (b[Userprofile] === undefined) {
                    return -1;

                } else if (Userprofile === "name") {
                    return a[Userprofile].first.localeCompare(b[Userprofile].first);
                } else {
                    return b[Userprofile] - a[Userprofile];
                }

                // NGL this is a total mess... like... what am I even doing here.

            } else {
                if (a[Userprofile] === undefined) {
                    return 1;
                } else if (b[Userprofile] === undefined) {
                    return -1;
                } else if (Userprofile === "name") {
                    return b[Userprofile].first.localeCompare(a[Userprofile].first);
                } else {
                    return b[Userprofile] - a[Userprofile];
                }
            }
        };

        // The compare function is now called here.
        // This is also the variable that keeps track of the sorted users
        let sortedUsers = devState.filteredUsers.sort(compareFunction);

        setDevState({
            ...devState,
            filterUserList: sortedUsers
        });

    };

    const handleSearchChange = event => {

        // Filters out content
        const filter = event.target.value;

        // Returns a list with the newly filtered content
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
        API.getUsers().then(results => {
            setDevState({
                ...devState,
                users: results.data.results,
                filterUserList: results.data.results
            });
        });
    }, [devState]);

// And now for the actual react thing, now that functions are out of the way.

    return (
        <EmpContext.Provider
            value={{ devState, handleSearchChange, sortData }}
        >        
          <Navbar />

            <div className="datasection">

{/* AAAAAAAAA. filterUserList not SORTEDUSERS AAAAA */}

                {devState.filterUserList.length > 0
                    ? <EmpTable />
                    : <div></div>
                }
            </div>
        </EmpContext.Provider>
    );
};

// Finally, we export this lovely mess.
export default EmpData;


// Okay, so the app sort of displays. Looks like hot garbage, but at least it sort of