import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className={classes.mContent}>
      <div><img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/></div>
      <div>Ava + description</div>
      <div>My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
      </div>
    )
}

export default Profile;