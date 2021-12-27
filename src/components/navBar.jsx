import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../config/colors";
import Button from "./button";
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-white justify-content-between px-5">
            <Link className="navbar-brand" to="/">
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "2rem",
                        color: Colors.primary,
                    }}
                >
                    merobooking
                    <span style={{ color: Colors.secondary }}>.com</span>
                </div>
            </Link>
            <form className="form-inline">
                <Button text="Get Help?" borderColor="1px solid black" />
            </form>
        </nav>
    );
};

export default NavBar;
