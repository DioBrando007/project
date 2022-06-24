import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let postsElements = props.postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />)

  let newPost = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let textElem = newPost.current.value;
    props.updatePostText(textElem);
  }

  return (

    <div className={classes.description}>My posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;