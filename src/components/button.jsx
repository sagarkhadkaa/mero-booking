import React from "react";
const Button = ({
    borderColor = "1px solid black",
    backgroundColor,
    textColor = "#000",
    text,
}) => {
    return (
        <button
            style={{
                borderRadius: "3.625rem",
                fontWeight: "bold",
                backgroundColor: backgroundColor,
                color: textColor,
                border: borderColor,
            }}
            className="btn btn"
            type="submit"
        >
            {text}
        </button>
    );
};

export default Button;
