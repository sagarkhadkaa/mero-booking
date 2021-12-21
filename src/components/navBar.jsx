import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-5">
            <Link className="navbar-brand" to="/">
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "2rem",
                        color: "#1E4FCE",
                    }}
                >
                    merobooking<span style={{ color: "#E2641D" }}>.com</span>
                </div>
            </Link>
            <form className="form-inline">
                <Button text="Get Help?" />
            </form>
        </nav>
    );
};

export default NavBar;
