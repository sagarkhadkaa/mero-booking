import React, { useState, useEffect } from "react";
import AppointmentCard from "./appointmentCard";
import TestButton from "./testButton";
import TimeSchedule from "./timeSchedule";
const Home = () => {
    return (
        <div>
            <AppointmentCard />
            {/* <TimeSchedule /> */}
        </div>
    );
};

export default Home;
