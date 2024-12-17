import React from "react";

function Toaster({ message, onConfirm, onCancel }) {
    return (
        <div className="toaster">
            <div className="toaster-message">{message}</div>
            <div className="BtnParent">
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default Toaster;
