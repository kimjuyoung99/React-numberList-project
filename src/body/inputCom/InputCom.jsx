import React, { useState } from "react";
import "../../body/body.css";
import InputEl from "./InputEl";
import SaveBtn from "./SaveBtn";
import SelectEl from "./selectEl";

export default function InputCom({ setList, lists }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [note, setNote] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const validateName = (value) => {
        if (value.trim().length < 2) {
            return '이름은 한글로 두 글자 이상 입력해 주세요';
        }
        return '';
    };

    const validatePhone = (value) => {
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        if (!phoneRegex.test(value)) {
            return '전화번호는 010-0000-0000형식으로 입력해 주세요';
        }
        return '';
    };

    const handleSave = () => {
        const newNameError = validateName(name);
        const newPhoneError = validatePhone(phone);

        setNameError(newNameError);
        setPhoneError(newPhoneError);
        setShowErrors(true);

        if (!newNameError && !newPhoneError && group) {
            setList(prevList => [...prevList, { name, phone, group, note }]);
            setName('');
            setPhone('');
            setGroup('');
            setNote('');
            setShowErrors(false);
        } else if (!group) {
            alert('그룹은 필수로 선택해야 합니다.');
        }
    };

    return (
        <div className="InputCom">
            <div className="inputEl">
                <InputEl 
                    label="이름" 
                    placeholder="이름" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    error={showErrors ? nameError : ''}
                />
                <InputEl 
                    label="전화번호" 
                    placeholder="전화번호" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    error={showErrors ? phoneError : ''}
                />
                <InputEl 
                    label="간단한 기록" 
                    placeholder="간단한 기록" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)}
                />
                <SelectEl 
                    label="그룹" 
                    onChange={(e) => setGroup(e.target.value)}
                />
            </div>
            <SaveBtn onClick={handleSave} />
        </div>
    );
}