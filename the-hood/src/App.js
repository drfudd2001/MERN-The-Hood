import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <p>Below is user info</p>
      <Profile></Profile>
    </div>
  );
}

export default App;
