import "../../body/body.css";
import { useState } from "react";
import SearchCom from "./SearchCom";
import { useEffect } from "react";
import List from "./List";

export default function PostList ({setList, lists}) {
    const [filteredLists, setFilteredLists] = useState(lists || []);
    const [inputText, setInputText] = useState("");

    console.log("filteredLists:", filteredLists);
    console.log("lists prop:", lists);
    
    useEffect(() => {
        setFilteredLists(lists);
    }, [lists]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    //검색어를 필터링 하는 함수
    const handleSearch = () => {
        const filtered = lists.filter(item =>
            item.name.toLowerCase().includes(inputText.toLowerCase())
            //문자열 모두 소문자로 변환, 대소문자 구분 안하고 검색
            //boolean값으로 반환
        );
        setFilteredLists(filtered);
    }
    //각 리스트 항목의 이름이 사용자가 입력한 검색어를 포함하고 있는지 확인

    //검색 창
    const handleKeyUp = (e) => {
        if(e.key === 'Enter'){
            //여기에 검색 로직 추가
            console.log("Searching for : ",inputText);
            //setList로 검색 결과 업데이트 가능
            handleSearch();
        }
    }

    return (
        <div className="postlist">
            <div className="searchHeader">
            <input 
            className="numberInput"
            value={inputText}
            type="text"
            placeholder="검색어를 입력 후 엔터를 누르세요"
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            />  
            <SearchCom 
                handleSearch={handleSearch} setFilteredLists={setFilteredLists} lists={lists}
            />
            </div>
            <List lists={filteredLists} />
        </div>
    );
}
