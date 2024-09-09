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