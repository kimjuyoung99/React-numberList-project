import "../../body/body.css";
import List from "./List";
import PostList from "./PostList";
import SearchCom from "./SearchCom";

export default function ListArea ({lists}) {
    return (
        <div className="listArea">
            ListArea 공간입니다.
            <PostList />
            <SearchCom />
            <List lists={lists} />
        </div>
    );
};
