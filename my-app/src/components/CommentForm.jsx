import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CommentForm = ({create}) => {
    const [comment, setComment] = useState({body: ''})

    const addNewComment = (e) => {
        e.preventDefault()
        const newComment = {
            ...comment, id: Date.now()
        }
        create(newComment)
        setComment({body: ''})
    }


    return (
        <form>
            <MyInput
                value={comment.body}
                onChange = {e => setComment({...comment, body: e.target.value})}
                title='text'
                placeholder={"комментарий"}
            />
            <MyButton onClick={addNewComment}>Отправить</MyButton>
        </form>
    );
};

export default CommentForm;