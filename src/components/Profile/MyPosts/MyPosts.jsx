import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';




const MyPosts = (props) => {
    debugger
    let postsData = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(props.addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = props.updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsData}


            </div>
        </div>
    );
}

export default MyPosts;