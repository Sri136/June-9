import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <Link to="/" className="nav-button" activeClassName="active" exact>
                        Home
                    </Link>
                    <Link to="/about" className="nav-button" activeClassName="active">
                        About
                    </Link>
                    <Link to="/services" className="nav-button" activeClassName="active">
                        Services
                    </Link>
                    <Link to="/contact" className="nav-button" activeClassName="active">
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;