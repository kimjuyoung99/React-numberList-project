import "../../body/body.css";
import List from "./List";
import PostList from "./PostList";
import SearchCom from "./SearchCom";

export default function ListArea ({lists}) {
    return (
        <div className="listArea">
            <PostList />
            <List lists={lists} />
        </div>
    );
};
