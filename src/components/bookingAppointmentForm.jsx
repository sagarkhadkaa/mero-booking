import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { Colors } from "../config/colors";
import Button from "./button";
import Footer from "./footer";

class BookingAppointmentFormOld extends Form {
    state = {
        data: {
            name: "",
            email: "",
            phone: "",
            // addrass: "",
            message: "",
            date: "",
        },
        errors: {},
    };

    schema = {
        name: Joi.string().required().label("Name"),
        email: Joi.string().required().email().label("Email"),
        phone: Joi.string().length(10).required().label("Phone Number"),
        // address: Joi.string().label("Address"),
        message: Joi.string().required().label("Message"),
        date: Joi.date().required().label("Date"),
    };

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    };

    //Optimization
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
                        marginBottom: "100px",
                    }}
                    className={`container mt-2 col-11 col-sm-8 col-md-6 col-lg-5`}
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
                        <Link
                            style={{
                                height: "100%",
                            }}
                            to="/"
                        >
                            <Button
                                text="Go Back"
                                borderColor="1px solid black"
                            />
                        </Link>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput(
                                "name",
                                "Name",
                                "text",
                                "Phil Foden"
                            )}
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

                            {this.renderInput(
                                "email",
                                "Email Address",
                                "email",
                                "phil.foden@gmail.com"
                            )}
                            {this.renderInput(
                                "phone",
                                "Phone Number",
                                "tel",
                                "9841000000"
                            )}
                            {this.renderInput(
                                "address",
                                "Address",
                                "text",
                                "Address"
                            )}
                            {this.renderInput(
                                "message",
                                "Message",
                                "text",
                                "Messages"
                            )}
                            {this.renderInput(
                                "date",
                                "Date",
                                "date",
                                "message"
                            )}
                            <div className="p-2">
                                {this.renderButton("Book Appointment")}
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default BookingAppointmentFormOld;
