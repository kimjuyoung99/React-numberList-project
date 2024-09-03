import "../../body/body.css";
import { useState } from "react";

export default function PostList ({setList, lists}) {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyUp = (e) => {
        if(e.key === 'Enter'){
            //여기에 검색 로직 추가
            console.log("Searching for : ",inputText);
            //setList로 검색 결과 업데이트 가능
        }
    }

    return (
        <div className="postlist">
            <input 
            className="numberInput"
            value={inputText}
            type="text"
            placeholder="검색어를 입력 후 엔터를 누르세요"
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            >  
            </input>
        </div>
    );
};
