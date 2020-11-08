
import React from "react";
import "./ContextMenu.css";

const ContextMenu = ({ position, onOptionSelected, position_div_x, position_div_y }) => {
    const handleOptionSelected = option => () => onOptionSelected(option);
    debugger
    return (
        <div
            className="menu"
            style={{
                position: "absolute",
                left: position.x + position_div_x,
                top: position.y + position_div_y
            }}
        >
            <ul>
                <li onClick={handleOptionSelected("Delete")}>Delete</li>
                <li onClick={handleOptionSelected("option2")}>Option2</li>
            </ul>
        </div>
    );
};

export default ContextMenu;