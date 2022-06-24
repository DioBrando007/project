import classes from './Post.module.css'

const Post = (props) => {
    return (      
        <div>
          <div className={classes.item}> <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/> 
          {props.message}
          <div><span>{props.likesCount}</span></div></div>         
        </div>      
    )
}

export default Post;