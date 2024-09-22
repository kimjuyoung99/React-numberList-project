import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./groupModal.css"; // CSS 파일 import

// 5. lists prop을 추가하여 현재 사용 중인 그룹 정보를 가져올 수 있게 한다.
const GroupModal = ({ isOpen, onClose, onAddGroup, lists }) => {
    const [groups, setGroups] = useState(["가족", "직장", "친구", "스터디"]);
    const [newGroup, setNewGroup] = useState("");
    console.log("GroupModal 컴포에서 list : ",lists)

    useEffect(() => {
        const savedGroups = localStorage.getItem("groups");
        if (savedGroups) {
            setGroups(JSON.parse(savedGroups));
        }
        console.log("Initial groups:", groups);
        console.log("Received lists:", lists);
    }, []);
    useEffect(() => {
        console.log("Received lists in GroupModal:", lists);
        console.log("Lists type:", typeof lists);
        console.log("Lists length:", lists.length);
    }, [lists]);

    const handleAddGroup = () => {
        if (newGroup.trim() !== "") {
            const updatedGroups = [...groups, newGroup.trim()];
            setGroups(updatedGroups);
            localStorage.setItem("groups", JSON.stringify(updatedGroups));
            //JSON.stringify()는 JavaScript 객체나 배열을 JSON 문자열로 변환
            //localStorage는 문자열만 저장할 수 있기 때문에, 객체나 배열을 저장할 때는 반드시 JSON 문자열로 변환해야 함
            //updatedGroups 배열을 JSON 문자열로 변환. 변환된 JSON 문자열을 'groups'라는 키로 localStorage에 저장
            onAddGroup(updatedGroups);
            setNewGroup("");
            console.log("Group added:", newGroup.trim());
        }
    };

    // 2. handleDeleteGroup 함수를 추가하여 그룹 삭제 기능을 구현
    const handleDeleteGroup = (groupToDelete) => {
        const updatedGroups = groups.filter((group) => group !== groupToDelete);
        setGroups(updatedGroups);
        localStorage.setItem("groups", JSON.stringify(updatedGroups));
        onAddGroup(updatedGroups);
        console.log("Group deleted:", groupToDelete);
    };

    // 3. isGroupInUse 함수를 추가하여 각 그룹이 현재 사용 중인지 확인
    const isGroupInUse = (group) => {
        console.log("Checking group:", group);
        console.log("Current lists:", lists);
        const result = Array.isArray(lists) && lists.some((item) => {
            console.log("Comparing with item:", item);
            return item.group === group;
        });
        console.log(`Is group "${group}" in use:`, result);
        return result;
    };

    if (!isOpen) {
        console.log("Modal is closed");
        return null;
    }

    console.log("Rendering modal with groups:", groups);

    return (
        <div className="groupmodal">
            <div className="groupmodal-content">
                <div className="groupmodal-header">
                    <h2 className="groupmodal-title">그룹 관리</h2>
                    <button onClick={onClose} className="groupmodal-close">
                        <X size={24} />
                    </button>
                </div>
                <ul className="groupmodal-list">
                    {groups.map((group, index) => {
                        const inUse = isGroupInUse(group);
                        console.log(`Rendering group "${group}", in use: ${inUse}`);
                        return (
                            <li key={index} className="groupmodal-list-item">
                                {group}
                                {inUse ? (
                                    <span className="group-in-use-indicator">사용 중</span>
                                ) : (
                                    <button
                                        onClick={() => handleDeleteGroup(group)}
                                        className="groupmodal-delete-button"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
                <div className="groupmodal-form">
                    <input
                        type="text"
                        value={newGroup}
                        onChange={(e) => setNewGroup(e.target.value)}
                        placeholder="새 그룹 이름"
                        className="groupmodal-input"
                    />
                    <button onClick={handleAddGroup} className="groupmodal-button">
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupModal;