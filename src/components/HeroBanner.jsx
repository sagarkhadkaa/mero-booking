import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
    return (
        <section id="home">
            <div className="container">
                <div className="home-text">
                    <div className="section-text__subtitle">
                        World's most reliable appointment booking website
                    </div>
                    <div className="section-text__title-big">
                        Start Booking your appointments.
                    </div>
                    <div className="section-text__body">
                        The easiest book an appointment online. Always worth a
                        browse. Where your journey begins
                    </div>
                    <Link to="/bookingAppointments" className="download-btn">
                        Get Started{" "}
                    </Link>
                </div>

                <div className="section-image">
                    <img src="./images/hero_right.webp" alt="app preview" />
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
