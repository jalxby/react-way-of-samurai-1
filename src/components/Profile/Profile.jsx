import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg-hec6jMJyxB4GtjgUtzaxwau2UuTRqh9w&usqp=CAU"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;