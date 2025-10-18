import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container">
                <div className="d-flex align-items-center">
                    <Link className="nav-link text-secondary fw-bold me-5" to="/">Borse Luxury</Link>
                    <Link className="nav-link text-color me-3" to="/borse">Borse</Link>
                    <Link className="nav-link text-color me-3" to="/collezioni">Collezioni</Link>
                    <Link className="nav-link text-color" to="/sconti">Sconti</Link>
                </div>

                <div className="ms-auto">
                    <a href="http://localhost:8080/login" className="btn btn-outline-secondary">Admin Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
