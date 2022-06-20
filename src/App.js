import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
