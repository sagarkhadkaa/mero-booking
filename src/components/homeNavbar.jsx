import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollYPosition } from "react-use-scroll-position";
import "../assets/navbar.css";
import { Colors } from "../config/colors";

function HomeNavBar({ links }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollY = useScrollYPosition();

    const stickeyTrigger = window.innerHeight / 2.75;

    return (
        <div
            className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
                menuOpen ? " nav-open" : ""
            }`}
        >
            <div className="nav-content">
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

                <nav className="nav-links__container">
                    {links &&
                        links.map((link, i) => (
                            <Link className="nav-link" to={link.href} key={i}>
                                <div className="nav-link__text">
                                    {link.title}
                                </div>
                                <div className="nav-link__background" />
                            </Link>
                        ))}
                </nav>

                <div
                    className="nav-menu__icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}

HomeNavBar.defaultProps = {
    links: [
        { title: "Home", href: "#home" },
        { title: "Features", href: "#features" },
        { title: "Services", href: "#services" },
        { title: "Login", href: "listingAppointments" },
    ],
};

export default HomeNavBar;
