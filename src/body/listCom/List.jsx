import "../../body/body.css";

export default function List ({lists}) {
    if (!lists || lists.length === 0){
        return <div className="list">전번 목록이 없습니다.</div>
    }
    return (
        <div className="list">
            {/* 리스트 목록 공간 */}
            {lists.map((item, index)=>(
                <div key={index} className="list-item">
                {item.name} - {item.phone} ({item.group})
                <div className="list-item2">
                <button className="details-btn">세부사항</button>
                <button className="delete-btn">삭제</button>
                </div>
            </div>                
            ))}
        </div>
    );
};