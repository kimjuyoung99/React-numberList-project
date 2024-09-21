import React from "react";
import "./body.css";
import InputCom from "./inputCom/InputCom";
import ListArea from "./listCom/ListArea";

export default function Body ({setList, lists}) {
    return (
        <div className="phone-book-container">
            <InputCom setList={setList}/>
            <ListArea setList={setList} lists={lists} />
        </div>
    );
};