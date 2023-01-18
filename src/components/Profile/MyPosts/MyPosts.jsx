import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi! How are you?'} likeCount={'10'}/>
                <Post message={'It\'s my first post'} likeCount={'15'}/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;