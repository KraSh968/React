import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import CommenItem from "./CommenItem";
import ComentList from "./ComentList";
import MyInput from "./UI/input/MyInput";
import CommentForm from "./CommentForm";

const PostItem = (props) => {

    const [comments, setComments] = useState([

    ])

    const createComment = (newComment) => {
        setComments([...comments, newComment])
    }

    const removeComment = (comment) => {
        setComments(comments.filter(p => p.id !== comment.id))
    }


    return (
        <div className='post'>
            <div className='postContent'>
                <div className='postInfo'>
                <strong>{props.number}. {props.post.title}</strong>
                    <img src={props.post.img}/>
                    <p>Рейтинг:{props.post.rating}</p>
                </div>
                <div className='postBtns'>
                    <p style={{margin: '50px 0px 0 50px'}}>{props.post.body}</p>
                    <MyButton style={{marginTop: '250px', marginLeft: '380px'}} onClick = {() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
            <div>
                <h3>Комментарии:</h3>
                <CommentForm create={createComment}/>
                <ComentList remove={removeComment} comments={comments}/>
            </div>

        </div>
    )
}

export default PostItem;