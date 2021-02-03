import CommentBody from "./BodyWidget";
import {connect} from "react-redux";
import {compose} from "redux";
import {sendMessage, updateNewMessageBody} from "./Redux/posts-resucer";


let mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageBody}),) (CommentBody);