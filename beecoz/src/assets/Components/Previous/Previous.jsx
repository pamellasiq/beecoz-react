import React from "react";
import { Link } from 'react-router-dom';
import "./Previous.modules.css"


function Index() {
    return (
        <>
        <div className="all-p">
        <Link to="/" className="prev">
        <i className="ri-arrow-left-line"></i>
        </Link>
        </div>
        </>
    );
}

export default Index