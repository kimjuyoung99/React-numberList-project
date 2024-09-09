import "../../body/body.css";
import { useState,useEffect } from "react";
import GroupModal from "../../groupModal/GroupModal";

export default function SelectEl ({label, value, onChange}) {
    //모달 표시 여부와 그룹 목록 상태 초기화'
    const [showModal, setShowModal] = useState(false);
    const [groups, setGroups] = useState(['가족','직장','친구','스터디']);

    useEffect (()=> {
        const savedGroups = localStorage.getItem('groups');
        if(savedGroups) {
            setGroups(JSON.parse(savedGroups));
        }
    },[]);

    // 새 그룹 추가 시 호출되는 함수
    const handleAddGroup =(updatedGrouops)=>{
        setGroups(updatedGrouops);
        //새로 추가된 그룹을 현재 선택된 값으로 설정
        onChange({target: {value: updatedGrouops[updatedGrouops.length -1]}});
    }

    return (
        <div className="selectel">
            <label className="input-label">{label}</label>
            <select className="group-select" value={value} onChange={onChange}>
                <option value="">그룹 선택</option>
                {groups.map((group, index)=> (
                    <option key={index} value={group}>{group}</option>
                ))}
            </select>
            {/* 그룹 추가 버튼 */}
            <button onClick={()=> setShowModal(true)} className="add-group-btn">조직 추가</button>

             {/* 그룹 모달 컴포넌트 */}
            <GroupModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onAddGroup={handleAddGroup}
            />
        </div>
    );
};
