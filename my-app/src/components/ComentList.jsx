import React from 'react';
import PostItem from "./PostItem";
import CommenItem from "./CommenItem";

const ComentList = ({comments, remove}) => {

    if (!comments.length) {
        return (
            <h1 style ={{textAlign: 'center'}}>
                коментариев нет
            </h1>
        )
    }

    return (
        <div>
            {comments.map(comment =>
                <CommenItem remove={remove} comment={comment} key={comment.id}/>
            )}
        </div>
    )
}

export default ComentList;