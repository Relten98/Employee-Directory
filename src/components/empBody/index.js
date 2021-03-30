// Core imports to get this to work.
import React, { useContext } from "react";
// Our employee data and table info
import "../EmpTable";
import "../EmpData";

import EmpContext from "../../utils/EmpContext";

// TODO
let EmpBody = () => {

    const context = useContext(EmpContext);

    function dateformat(date) {
    
        // Main array that will be used to sort out the date.
        let dateArray = date.split('-');
        //   Sorts days
        let dayArray = dateArray[2].split('T');
        let day = dayArray[0];
        // Sets up month and year months
        let month = dateArray[1];
        let year = dateArray[0];
        //    Using the global standard or writing DOB
        let formatedDOB = [day, month, year].join('-');
        // Retuns the data from the formatted DOB.
        return formatedDOB;
    }

    // And now to return our data as HTML information through REACT
    return (
        <tbody>
            {context.devState.sortedusrs[0] !== undefined && context.devState.sortedusrs[0].name
                !== undefined ? (
                context.devState.sortedusrs.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="image" classname="image" >
                                <img src={picture.medium}
                                    alt={name.first + `'s profile picture`} 
                                    />
                            </td>
                            <td data-th="name">
                                {name.first} {name.last}
                            </td>
                            <td data-th="phone">
                                {phone}
                            </td>
                            <td data-th="email">
                                <a href={`mailto:` + email} target="blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="dob">
                                {dateformat(dob.date)}
                            </td>
                            </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
export default EmpBody;