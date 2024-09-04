import "../../body/body.css";
import InputEl from "./InputEl";
import SaveBtn from "./SaveBtn";
import SelectEl from "./selectEl";

export default function InputCom ({setList, lists}) {
    return (
        <div className="InputCom">
            <div className="inputEl">
            <InputEl label="이름" placeholder="이름" />
            <InputEl label="전화번호" placeholder="전화번호" />
            <InputEl label="간단한 기록" placeholder="간단한 기록" />
            <SelectEl label="그룹"/>
            </div>
            <SaveBtn />
        </div>
    );
};
