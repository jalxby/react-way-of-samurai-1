import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi!', likesCount: '10'},
        {id: 2, message: 'It\'s my first post', likesCount: '12'},
        {id: 3, message: 'The second', likesCount: '33'},
        {id: 4, message: 'Go home', likesCount: '0'},
        {id: 5, message: 'I\'m gonna be a developer', likesCount: '14'},
        {id: 6, message: 'It-incubator', likesCount: '23'}
    ]

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
                <Post message={postsData[0].message} likeCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likeCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likeCount={postsData[3].likesCount}/>
                <Post message={postsData[4].message} likeCount={postsData[4].likesCount}/>
                <Post message={postsData[5].message} likeCount={postsData[5].likesCount}/>

                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;