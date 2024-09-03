import "../../body/body.css";
import List from "./List";
import PostList from "./PostList";
import SearchCom from "./SearchCom";

export default function ListArea ({lists}) {
    return (
        <div className="listArea">
            전화번호목록 랜더링하는<br />
            ListArea 공간입니다.
            <PostList />
            <SearchCom />
            <List lists={lists} />
        </div>
    );
};
