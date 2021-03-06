import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={props.profilePage.postsData}
       addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updatePostText={props.updatePostText}/>
    </div>
  )
}

export default Profile;