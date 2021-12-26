import React, { useEffect, useState } from "react";
const DynamicWidth = () => {
    const [width, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });

    const setDimension = () => {
        //resize eventlistner
        getDimension({
            dynamicWidth: window.innerWidth,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", setDimension);

        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [width]);

    return (
        <div>
            <ul>
                <li>
                    Width: <strong>{width.dynamicWidth}</strong>
                </li>
            </ul>
        </div>
    );
};

export default DynamicWidth;
