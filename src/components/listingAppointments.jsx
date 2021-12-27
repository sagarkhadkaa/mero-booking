import React from "react";
import { Colors } from "../config/colors";
import AppointmentCard from "./appointmentCard";
import Button from "./button";
import Footer from "./footer";
import NavBar from "./navBar";

import { BsCalendarDate, BsClock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
const ListingAppointmentsForm = () => {
    return (
        <div>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    borderRadius: "5px",
                    marginBottom: "100px",
                }}
                className="container mt-3  col-11 col-sm-8 col-md-8 col-lg-6 col-xl-5"
            >
                <div className="d-flex justify-content-between flex-wrap mb-3">
                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Scheduled Appointments
                    </p>
                    <Link
                        style={{
                            height: "100%",
                        }}
                        to="/bookingAppointments"
                    >
                        <Button
                            text="Book an Appointment"
                            backgroundColor={Colors.secondary}
                            textColor={Colors.white}
                        />
                    </Link>
                </div>
                <div>
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ListingAppointmentsForm;
