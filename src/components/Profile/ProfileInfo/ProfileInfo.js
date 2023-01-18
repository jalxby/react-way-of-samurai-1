import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={s.img}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg-hec6jMJyxB4GtjgUtzaxwau2UuTRqh9w&usqp=CAU"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;