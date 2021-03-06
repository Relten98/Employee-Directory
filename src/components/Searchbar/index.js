// Imports
import React, { useContext } from "react";

// CSS Sheet
import "./Searchbar.css";

// Our context
import EmpContext from "../../utils/EmpContext";

// The mighty searchbar
const Searchbar = () => {
    const context = useContext(EmpContext);

    // Lmao y me
    return (
        <div className="SearchName">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}

export default Searchbar;