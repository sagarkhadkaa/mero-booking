import React, { Component } from "react";
import { Colors } from "../config/colors";
import Button from "./button";
import Footer from "./footer";
import NavBar from "./navBar";

class BookingAppointmentForm extends Component {
    state = {
        formContainterClassName: "col-3",
    };
    styles = {
        headerSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    };
    formGroupClassName = "form-group p-1";

    render() {
        return (
            <div>
                <NavBar />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: Colors.white,
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                    className={`container-md mt-3 col-5 ${this.state.formContainterClassName}`}
                >
                    <div style={this.styles.headerSection}>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                            }}
                        >
                            Book New Appointment
                        </p>
                        <Button text="Go Back" />
                    </div>
                    <div>
                        <form>
                            <div className="form-row">
                                <div className={this.formGroupClassName}>
                                    <label htmlFor="user-name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="user-name"
                                        aria-describedby="nameHelp"
                                        placeholder="Phil Foden"
                                    />
                                </div>
                                <div className={this.formGroupClassName}>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            className="form-check-input"
                                            id="flexRadioDefault1"
                                        />
                                        <label
                                            htmlFor="flexRadioDefault1"
                                            className="form-check-label"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            name="gender"
                                            value="female"
                                            className="form-check-input"
                                            type="radio"
                                            id="flexRadioDefault2"
                                        />
                                        <label
                                            htmlFor="flexRadioDefault2"
                                            className="form-check-label"
                                        >
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            name="gender"
                                            value="others"
                                            className="form-check-input"
                                            type="radio"
                                            id="flexRadioDefault3"
                                        />
                                        <label
                                            htmlFor="flexRadioDefault3"
                                            className="form-check-label"
                                        >
                                            Others
                                        </label>
                                    </div>
                                </div>
                                <div className={this.formGroupClassName}>
                                    <label htmlFor="user-email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="user-email"
                                        aria-describedby="emailHelp"
                                        placeholder="phil.foden@gmail.com"
                                    />
                                </div>
                                <div className={this.formGroupClassName}>
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
                                <div className={this.formGroupClassName}>
                                    <label htmlFor="user-address">
                                        Address
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="user-address"
                                        cols="50"
                                    />
                                </div>
                                <div className={this.formGroupClassName}>
                                    <label htmlFor="user-date">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="user-date"
                                        placeholder=""
                                    />
                                </div>
                                <div className="p-2">
                                    <Button
                                        text="Book Appointment"
                                        backgroundColor={Colors.secondary}
                                        textColor={Colors.white}
                                        borderColor="blue"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default BookingAppointmentForm;
