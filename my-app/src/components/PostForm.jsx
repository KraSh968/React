import React, { useState } from 'react';
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '', img: '', rating: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: '', img: '', rating: ''})
      }


  return (
    <form>
          <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type='text' placeholder='Название фильма'/>
          <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type='text' placeholder='Описание фильма'/>
            <MyInput value={post.img} onChange={e => setPost({...post, img: e.target.value})} type='text'/>

        <MyInput value={post.rating} onChange={e => setPost({...post, rating: e.target.value})} type='text' placeholder='Рейтинг'/>
          <MyButton onClick={addNewPost}>Создать</MyButton>
    </form>
  )
}

export default PostForm