import React, { useState, useEffect } from "react";
import TestButton from "./testButton";
const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width]);
    return <div>{width}</div>;
};

export default Home;
