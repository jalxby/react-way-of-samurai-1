import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://image.similarpng.com/very-thumbnail/2021/06/Dragon-logo-symbol-on-transparent-background-PNG.png" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;