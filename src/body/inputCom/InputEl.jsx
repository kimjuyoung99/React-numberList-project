import "../../body/body.css";

export default function InputEl ({label,placeholder}) {

    return (
        <div className="inputel">
            <label className="input-label">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="input-fhiled"
            >
            </input>
        </div>
    );
};
