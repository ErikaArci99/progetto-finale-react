import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold text-secondary" to="/">Borse Luxury</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-color" to="/borse">Borse</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-color" to="/collezioni">Collezioni</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-color" to="/sconti">Sconti</Link>
                        </li>
                    </ul>

                    <Link className="btn btn-outline-secondary btn-sm" to="/">Home</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
