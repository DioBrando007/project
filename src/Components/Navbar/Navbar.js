import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item ;

    return (
      <nav className={classes.nav}>
      <div className={classes.item}><NavLink to='/profile' className={ActiveLink}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to='/dialogs' className={ActiveLink}>Messages</NavLink></div>
      <div className={classes.item}><a>News</a></div>
      <div className={classes.item}><a>Music</a></div>
      <div className={classes.item}><a>Settings</a></div>
      <div></div>
    </nav>
    )
}



export default Navbar;