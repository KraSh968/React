import React from 'react';
import MyButton from "./UI/button/MyButton";

const CommenItem = (props) => {


    return (
        <div className='comment'>
            <div className='cooment__content'>
                <div>{props.comment.body}</div>
            </div>
            <div>
                <button onClick={() => props.remove(props.comment)} className='coommentbtns'>Удалить</button>
            </div>
        </div>
    )
}

export default CommenItem;