import "../../body/body.css";
import PostList from "./PostList";

export default function ListArea ({lists, setList}) {
    return (
        <div className="listArea">
            <PostList lists={lists} setList={setList}/>
        </div>
    );
};