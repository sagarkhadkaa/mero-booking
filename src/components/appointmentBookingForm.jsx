import React from "react";
import Button from "./button";
const AppointmentBookingForm = () => {
    let styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        headerSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        header: {},
    };
    return (
        <div className="container-md mt-4" style={{ width: "45%" }}>
            <div style={styles.headerSection}>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    Book New Appointment
                </p>
                <Button text="Go Back" />
            </div>
            <div>
                <form>
                    <div className="form-row ">
                        <div className="form-group">
                            <label htmlFor="user-name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="user-name"
                                aria-describedby="nameHelp"
                                placeholder="Phil Foden"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="user-email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="user-email"
                                aria-describedby="emailHelp"
                                placeholder="phil.foden@gmail.com"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="user-phone-number">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="user-phone-number"
                                aria-describedby="phoneNumberHelp"
                                placeholder="9841000000"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="user-address">Address</label>

                            <input
                                type="text"
                                className="form-control"
                                id="user-address"
                                cols="50"
                            />
                        </div>
                        <div className="form-group mt-3 mb-4">
                            <label htmlFor="user-date">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="user-date"
                                placeholder=""
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Button text="Book Appointment" />
        </div>
    );
};

export default AppointmentBookingForm;
