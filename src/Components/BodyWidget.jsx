import React from "react";
import LikesIco from "../Assets/like.png";
import CommentIco from "../Assets/comment.png";
import "./BodyStyles.css"
import {Grid} from "@material-ui/core";

//posts render

const PostsList = (props) => {

    return (
        <div>
            <span className="namePost">
                {props.name}
            </span>
            <span className="datePost">
                {props.date}
            </span>
            <div className="messagePost">
                {props.message}
            </div>
        </div>
    )
}


class CommentBody extends React.Component {

    render() {
        let state = this.props.posts;
        let postBody = this.props.posts.posts.map(p => <PostsList name={p.name} key={p.id} message={p.message}
                                                                  date={p.date}/>)
        //adding new posts
        let newMessageBody = state.newMessageBody;
        let pnSendMessageClick = () => {
            this.props.sendMessage();
        };

        //updating body messages
        let onNewMessageChange = (e) => {
            let body = e.target.value;
            this.props.updateNewMessageBody(body);
        };

        //sending by keypress
        const onKeyPressHandler = (e) => {
            if (e.key === "Enter" && e.ctrlKey) {
                this.props.sendMessage();
            }
        }

        return (
            <div>
                <div className="contentBar">
                    <Grid item xs={9}>
                        <span className="paperFirst">
                         Последние отзывы
                    </span>
                        <span className="paperSecond">
                        Все отзывы
                    </span>
                    </Grid>
                    <Grid item xs={3}>
                        <span className="likes">
                        <img src={LikesIco} alt={"ico"}/>
                            {state.likes.count}
                    </span>
                        <span className="comments">
                        <img src={CommentIco} alt={"ico"}/>
                            {state.comments.count}
                    </span>
                    </Grid>

                </div>
                <div className="bodyContent">
                    {postBody}
                </div>
                <div className="inputArea">
                    <div className="inputWrapp"> <textarea value={newMessageBody}
                                                           onChange={onNewMessageChange}
                                                           onKeyPress={onKeyPressHandler}
                    > </textarea></div>
                    <div className="buttonWrap">
                        <button className="button" onClick={pnSendMessageClick}>Написать консультанту</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentBody;