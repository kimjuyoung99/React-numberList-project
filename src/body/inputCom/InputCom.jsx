import "../../body/body.css";
import InputEl from "./InputEl";
import SaveBtn from "./SaveBtn";
import SelectEl from "./selectEl";

export default function InputCom ({setList, lists}) {
    return (
        <div className="InputCom">
            InputCom 공간
            <div className="inputEl">
            <InputEl placeholder="이름" />
            <InputEl placeholder="전화번호" />
            <InputEl placeholder="간단한 기록" />
            <SelectEl />
            </div>
            <SaveBtn />
        </div>
    );
};
