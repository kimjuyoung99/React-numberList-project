import "../../body/body.css";
import { useState } from "react";

export default function SelectEl ({label, value, onChange}) {
    const [showAddGroup, setShowAddGroup] = useState(false);
    const [newGroup, setNewGroup] = useState('');

    const handleAddGroup =()=>{
        setShowAddGroup(true);
    }

    const handleSaveNewGroup =()=>{
        //새 그룹 저장하는 로직 추가
        console.log("새로운 그룹 추가 : ", newGroup);
        setShowAddGroup(false);
        setNewGroup('');
    }

    return (
        <div className="selectel">
            <label className="input-label">{label}</label>
            <select className="group-select" value={value} onChange={onChange}>
                <option value="">그룹 선택</option>
                <option value="가족">가족</option>
                <option value="직장">직장</option>
                <option value="친구">친구</option>
                <option value="스터디">스터디</option>
            </select>
            <button onClick={handleAddGroup} className="add-group-btn">조직 추가</button>

            {/* {showAddGroup && (
                <div className="add-group-form">
                    <input 
                    type="text"
                    value={newGroup}
                    onChange={(e)=> setNewGroup(e.target.value)}
                    placeholder="새 그룹 이름"
                    />
                    <button onClick={handleSaveNewGroup}>저장</button>
                </div>
            )} */}
        </div>
    );
};
