import React from "react";
import "../../body/body.css";

export default function SearchCom({ handleSearch, setFilteredLists, lists }) {
    const viewAllList = () => {
        setFilteredLists(lists);
    };

    return (
        <div className="searchcom">
            <button className="searchButton" onClick={handleSearch}>검색</button>
            <button className="viewAllListButton" onClick={viewAllList}>전체 보기</button>
        </div>
    );
}