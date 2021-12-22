import React, { Component } from "react";
import { Colors } from "../config/colors";
import Button from "./button";

class AppointmentBookingForm extends Component {
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
    formGroupClassName = "form-group p-2";

    render() {
        console.log(window.innerWidth, "width check");
        return (
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
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
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
                                <label htmlFor="user-address">Address</label>

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
        );
    }
}
export default AppointmentBookingForm;
