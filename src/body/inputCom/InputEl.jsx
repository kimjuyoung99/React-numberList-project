import "../../body/body.css";

export default function InputEl ({placeholder}) {
    return (
        <div className="inputel">
            <input
                type="text"
                placeholder={placeholder}
                className="input-fhiled"
            >
            </input>
        </div>
    );
};
