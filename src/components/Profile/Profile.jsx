import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     addPostActionCreator={props.addPostActionCreator}
                     updateNewPostTextActionCreator={props.updateNewPostTextActionCreator}
                     />
        </div>
    );
}

export default Profile;