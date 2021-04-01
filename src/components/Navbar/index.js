// Imports react
import React from 'react';

// SEARRRRRCCCCHHHH BARRRR BABYYYY
import Searchbar from "../Searchbar";

// For the navbar, which features the dreaded searchbar
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

{/* OOOOF */}
       <div className="search-area col-4">
        <Searchbar />
    </div>
</nav>
    );
}
export default Navbar;