import { useState } from "react";
import "../../body/body.css";
import InputEl from "./InputEl";
import SaveBtn from "./SaveBtn";
import SelectEl from "./selectEl";

export default function InputCom ({setList, lists}) {
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [note, setNote] = useState('');
    
    const handleSave =()=> {
        if(name && phone && group) {
            //setList 함수를 통해 데이터 저장하기
            setList(prevList => [...prevList, {name, phone, group, note}]);
            //inputfild 초기화
            setName('');
            setPhone('');
            setGroup('');
            setNote('');
        } else {
            alert('이름, 전화번호, 그룹은 필수로 입력해야 합니다.');
        }
    }


    return (
        <div className="InputCom">
            <div className="inputEl">
            <InputEl label="이름" placeholder="이름" value={name} onChange={e=>setName(e.target.value)}/>
            <InputEl label="전화번호" placeholder="전화번호" value={phone} onChange={e=>setPhone(e.target.value)}/>
            <InputEl label="간단한 기록" placeholder="간단한 기록" value={note} onChange={e=>setNote(e.target.value)}/>
            <SelectEl label="그룹" onChange={e=>setGroup(e.target.value)}/>
            </div>
            <SaveBtn onClick={handleSave}/>
        </div>
    );
};
