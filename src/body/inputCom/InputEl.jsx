import "../../body/body.css";
import React from "react";

export default function InputEl ({label,placeholder,value,onChange}) {

    return (
        <div className="inputel">
            <label className="input-label">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="input-fhiled"
                value={value}
                onChange={onChange}
            >
            </input>
        </div>
    );
};
