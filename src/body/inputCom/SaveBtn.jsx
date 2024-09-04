import "../../body/body.css";

export default function SaveBtn ({onClick}) {


    return (
        <div className="savebtn">
            <button onClick={onClick}>저장</button>
        </div>
    );
};
