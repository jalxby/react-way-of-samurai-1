import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div><textarea></textarea>
                <button>Add post</button>
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