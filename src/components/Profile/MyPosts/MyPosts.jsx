import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi!', likesCount: '10'},
        {id: 2, message: 'It\'s my first post', likesCount: '12'},
        {id: 3, message: 'The second', likesCount: '33'},
        {id: 4, message: 'Go home', likesCount: '0'},
        {id: 5, message: 'I\'m gonna be a developer', likesCount: '14'},
        {id: 6, message: 'It-incubator', likesCount: '23'}
    ]
    let postsData = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
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
                {postsData}

                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;