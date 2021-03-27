// Imports for react.
import React from 'react';
import "./style.css";
import API from '../utils/api.js';

// The core empContainer that will be used to fill out with employees.
class empContainer extends React.Component {
    state = {
        users: [],
        search: '',
        // This is going to be important for sorting later on.
        sortby: '',
        col: '',
    };


}
// OOOOOWA-AH-AH-AH