import './Profile.module.css'
const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img className={'contentImg'}
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
                <div className={'posts'}>
                    <div className={'item'}>
                        post1
                    </div>
                    <div className={'item'}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;