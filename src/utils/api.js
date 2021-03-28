// Imports axios to react, so that it can function properly.
import axios from "axios";

export default{
    getUsers: function(){

// This is here to call the api so we can generate random blokes, and blokettes.
        return axios.get (`https://randomuser.me/api/`)
    
    }
};