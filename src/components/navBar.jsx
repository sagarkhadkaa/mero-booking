import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-5">
            <Link className="navbar-brand" to="/">
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "32px",
                        color: "#1E4FCE",
                    }}
                >
                    merobooking<span style={{ color: "#E2641D" }}>.com</span>
                </div>
            </Link>
            <form className="form-inline">
                <button
                    style={{ borderRadius: "58px", fontWeight: "bold" }}
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Get Help?
                </button>
            </form>
        </nav>
    );
};

export default NavBar;
