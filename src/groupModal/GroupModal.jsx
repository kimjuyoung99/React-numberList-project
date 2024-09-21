import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './groupModal.css'; // CSS 파일 import

const GroupModal = ({ isOpen, onClose, onAddGroup }) => {
    const [groups, setGroups] = useState(['가족', '직장', '친구', '스터디']);
    const [newGroup, setNewGroup] = useState('');

    useEffect(() => {
        const savedGroups = localStorage.getItem('groups');
        if (savedGroups) {
        setGroups(JSON.parse(savedGroups));
        }
    }, []);

    const handleAddGroup = () => {
        if (newGroup.trim() !== '') {
        const updatedGroups = [...groups, newGroup.trim()];
        setGroups(updatedGroups);
        localStorage.setItem('groups', JSON.stringify(updatedGroups));
        //JSON.stringify()는 JavaScript 객체나 배열을 JSON 문자열로 변환localStorage는 문자열만 저장할 수 있기 때문에, 객체나 배열을 저장할 때는 반드시 JSON 문자열로 변환해야 함
        //updatedGroups 배열을 JSON 문자열로 변환. 변환된 JSON 문자열을 'groups'라는 키로 localStorage에 저장
        onAddGroup(updatedGroups);
        setNewGroup('');
        }
    };

    if (!isOpen) return null;

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
            {groups.map((group, index) => (
                <li key={index} className="groupmodal-list-item">{group}</li>
            ))}
            </ul>
            <div className="groupmodal-form">
            <input
                type="text"
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
                placeholder="새 그룹 이름"
                className="groupmodal-input"
            />
            <button
                onClick={handleAddGroup}
                className="groupmodal-button"
            >
                추가
            </button>
            </div>
        </div>
        </div>
    );
};

export default GroupModal;