import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/profile' element={<Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updatePostText={props.updatePostText}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
