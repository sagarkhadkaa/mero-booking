import React from "react";
const Button = (props) => {
    return (
        <button
            style={{ borderRadius: "3.625rem", fontWeight: "bold" }}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
        >
            {props.text}
        </button>
    );
};

export default Button;
