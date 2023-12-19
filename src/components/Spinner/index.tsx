import React from "react";
import "./Spinner.scss";

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner_animation"></div>
            <div>Please wait...</div>
        </div>
    );
};

export default Spinner;
