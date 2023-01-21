import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {


    let postsData = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text)
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