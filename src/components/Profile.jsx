import s from'./Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.contentImg}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg-hec6jMJyxB4GtjgUtzaxwau2UuTRqh9w&usqp=CAU"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;