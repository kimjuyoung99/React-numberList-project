import "../../body/body.css";
import InputEl from "./InputEl";
import SaveBtn from "./SaveBtn";
import SelectEl from "./selectEl";

export default function InputCom ({setList}) {
    return (
        <div className="InputCom">
            InputCom 공간
            <div className="inputEl">
            <InputEl />
            <InputEl />
            <SelectEl />
            <InputEl />
            </div>
            <SaveBtn />
        </div>
    );
};
