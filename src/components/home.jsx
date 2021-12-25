import React from "react";
import TestButton from "./testButton";
const Home = () => {
    return (
        <div>
            <TestButton />
            <div className="d-flex">
                <div className="form-check">
                    <input
                        name="gender"
                        value="male"
                        className="form-check-input"
                        type="radio"
                        id="flexRadioDefault1"
                    />
                    <label
                        htmlFor="flexRadioDefault1"
                        className="form-check-label"
                    >
                        Male
                    </label>
                </div>
                <div className="form-check mx-3">
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
                <div className="form-check">
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
        </div>
    );
};

export default Home;
