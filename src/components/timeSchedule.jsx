import React from "react";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GrMap } from "react-icons/gr";
const TimeSchedule = () => {
    return (
        <div className="d-flex bg-light align-items-center">
            <BsCalendarDate />
            <span>Today</span>
            <div className="d-flex align-items-center mx-2">
                <BsClock />
                <span>3.00 pm - 3.30pm</span>
            </div>
            {/* <CgProfile />
            <GrMap /> */}
        </div>
    );
};

export default TimeSchedule;
