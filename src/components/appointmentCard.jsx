import React from "react";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { Colors } from "../config/colors";
import Button from "./button";
const AppointmentCard = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: Colors.white,
                    padding: "10px",
                    borderRadius: "5px",
                    marginBottom: "10px",
                }}
            >
                <span className="mt-1 ms-3">
                    Request for loan of Rs 1,00,00,000.00 within 20 days
                </span>
                <div className="d-flex text-muted align-items-center mx-3 flex-wrap">
                    <CgProfile />
                    <span className="me-2">Phil Foden</span>
                    <div className="d-flex align-items-center">
                        <GoLocation />
                        <span>Baneshwor, Kathmandu</span>
                    </div>
                </div>
                <div
                    className="d-flex align-items-center ms-3"
                    style={{ backgroundColor: "#F3F3F3" }}
                >
                    <BsCalendarDate />
                    <span>Today</span>
                    <div className="d-flex align-items-center ms-4">
                        <BsClock />
                        <span>3.00 pm - 3.30pm</span>
                    </div>
                </div>
                <div className=" d-flex my-2">
                    <Button
                        className="ms-3"
                        text="Cancel"
                        borderColor="1px solid #515263"
                    />
                    <Button
                        className="ms-3"
                        text="Reschedule"
                        backgroundColor="#1E4FCE"
                        textColor="#fff"
                    />
                </div>
            </div>
        </>
    );
};

export default AppointmentCard;
